// Importing required modules and packages
const express = require('express'); // Importing Express web framework
const router = express.Router(); // Creating a router instance
const  User  = require('../models/User'); // Importing User model
const dotenv = require('dotenv'); // Importing dotenv package
const session = require('express-session'); // Importing express-session package
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
dotenv.config({ path: './config/config.env' }); // Loading environment variables from .env file

router.use(session({
  secret: process.env.MY_SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));

// Set up Passport middleware
router.use(passport.initialize());
router.use(passport.session());




passport.use(new LocalStrategy({
  usernameField: 'email', // Tell Passport to look for 'email' instead of 'username'
  passwordField: 'password' // Tell Passport to look for 'password' as usual
}, async function(email, password, done) {
  // Look up the user in the database based on their email
  const user = await User.findOne({ email });

  // If the user doesn't exist, return an error
  if (!user) {
    return done(null, false, { message: 'Incorrect email.' });
  }

  // If the user exists, check their password
  const passwordMatch = await bcrypt.compare(password, user.password);

  // If the password doesn't match, return an error
  if (!passwordMatch) {
    return done(null, false, { message: 'Incorrect password.' });
  }

  // If the password matches, return the user
  return done(null, user);
}
));
// Passport serializeUser function
passport.serializeUser(function(user, done) {
  // Store the user's id in the session
  done(null, user._id);
});

// Passport deserializeUser function
passport.deserializeUser(async function(id, done) {
  // Find the user in the database based on the id stored in the session
  const user = await User.findById(id);
  // If the user is not found, return an error
  if (!user) {
    return done(new Error('User not found'));
  }
  // If the user is found, return the user object
  done(null, user);
});




// Register a new user
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ error: 'User already exists' });
    }

    // Hash the password and create a new user
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
        // Generate a unique URL for the user
        const userId = crypto.randomBytes(16).toString('hex');
        const url = crypto.createHash('sha256').update(userId).digest('hex');
     // Create a new user
     const user = new User({ username, email, password: hashedPassword, profileUrl:url });
     await user.save();
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Server error' });
  }
});

// Log in an existing user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ error: 'Invalid credentials' });
    }
    
    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Determine the user's space
    const userSpace = `/user-space/${user.username}`;

    // Send back the token and redirect URL
    return res.status(200).send({ token, redirectUrl: userSpace,user });

  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Server error' });
  }
});

// Define the login function
function login(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      // Authentication failed, show error message on login page
      return res.status(401).render('login', { error: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send({ error: 'Server error3' });
      }
      // Authentication succeeded, redirect to user to homepage
      return res.redirect('/homePage');
    });
  })(req, res, next);
}

// Log in a user
router.post('/login', login);
// Log in a user after sign up
router.post('/signup', login);

// Log out a user
router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
router.get('/home', isAuthenticated, async (req, res) => {
  try {
    // Get the current user's information
    const currentUser = req.user;
   

    // Determine the user's space
    const user = await User.findById(currentUser);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
   
    const userSpace = `/user-space/${user.username}`;
  

    // Redirect the user to their space
    res.redirect(userSpace);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'Server Error' });
  }
});




router.get('/user-space/:id', isAuthenticated, async (req, res) => {
  try {
    const id = req.params.id;
    console.log('User ID:', id);
    const user = await User.findById(id);
    console.log('User:', user);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    const codes = user.codes;
    console.log('Codes:', codes);
    res.render('user-homePage', { username: user.username, codes });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'Server Error' });
  }
});



// Middleware to check if a user is authenticated


function isAuthenticated(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // get the token from the authorization header

  if (!token) {
    return res.status(401).send({ error: 'Unauthorized' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // verify the token using the JWT_SECRET
    req.user = decodedToken.userId; // add the user ID to the request object
    return next();
  } catch (err) {
    return res.status(401).send({ error: 'Unauthorized' });
  }
}
// Define the POST endpoint to create a new user
router.post('/users', async (req, res) => { 
  try {
    const user = new User(req.body);
    await user.save();
    console.log('User saved to database:', user);
    res.status(201).send(user);
  } catch (err) {
    console.error('Failed to create user:', err);
    res.status(400).send(err);
  }
});

// Get all users
router.get('/users/:userId', async (req, res) => {//tick
  try {
    const users = await User.find();
    console.log('All users retrieved:', users);
    res.status(200).send(users);
  } catch (err) {
    console.error('Failed to retrieve users:', err);
    res.status(500).send(err);
  }
});

//Update the password
router.put('/users/:userId/password', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

  const password = user.password;
    if (!password) {
          

      return res.status(404).json({ message: 'Picture not found' });
    }

    // Update the picture 
    if (req.body.password) {
      // Hash the password 
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      user.password = hashedPassword;
    }
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
//Update the username
router.put('/users/:userId/username', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

  const username = user.username;
    if (!username) {
      return res.status(404).json({ message: 'Picture not found' });
    }

    // Update the username 
    if (req.body.username) {
      user.username = req.body.username;
    }
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Get a user by ID
router.get('/users', async (req, res) => {
  try {
    const userId = req.query.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({error: 'User not found'});
    }
    console.log('User retrieved:', user);
    res.status(200).send(user);
  } catch (err) {
    console.error('Failed to retrieve user:', err);
    res.status(500).send(err);
  }
});




// Delete a user by ID
router.delete('/users/:userId', async (req, res) => { 
  try {
    const userId = req.params.userId;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).send({error: 'User not found'});
    }
    console.log('User deleted:', deletedUser);
    res.status(200).send(deletedUser);
  } catch (err) {
    console.error('Failed to delete user:', err);
    res.status(500).send(err);
  }
});




//Create a new code for a user
router.post('/users/:userId/codes', async (req, res) => {
  try {
    const userId = req.params.userId;
    const codeData = req.body;
    const newCode = await createCode(userId, codeData);
    console.log('New code created:', newCode);
    res.status(201).send(newCode);
  } catch (err) {
    console.error('Failed to create code:', err);
    res.status(500).send(err);
  }
});

async function createCode(userId, codeData) {
  const user = await User.findById(userId);

  const newCode = {
    title: codeData.title,
    codeHexa: codeData.codeHexa,
    codeMemo:codeData.codeMemo,
    compiled:codeData.compiled,
  };

  user.codes.push(newCode);
  await user.save();

  return user.codes[user.codes.length - 1];
}


// Read a code by ID for a user
router.get('/users/:userId/codes/:codeId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const codeId = req.params.codeId;
    const code = await getCode(userId, codeId);
    console.log('Code found:', code);
    res.status(200).send(code);
  } catch (err) {
    console.error('Failed to find code:', err);
    res.status(404).send({ error: err.message });
  }
});

//Read a code 
async function getCode(userId, codeId) {
  const user = await User.findById(userId);

  const code = user.codes.id(codeId);

  if (!code) {
    throw new Error('Code not found');
  }

  return code;
}

// Update a code by ID
router.put('/users/:userId/codes/:codeId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const code = user.codes.id(req.params.codeId);
    if (!code) {
      return res.status(404).json({ message: 'Code not found' });
    }

    // Update the code properties
    if (req.body.title) {
      code.title = req.body.title;
    }
    if (req.body.codeHexa) {
      code.codeHexa = req.body.codeHexa;
    }
    if (req.body.codeMemo) {
      code.codeMemo = req.body.codeMemo;
    }
    if (req.body.compiled) {
      code.compiled = req.body.compiled;
    }
  
    await user.save();
    res.json(code);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Read files for a user
router.get('/users/:userId/files', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const files = user.codes;

    console.log('Files found:', files);
    res.status(200).send(files);
  } catch (err) {
    console.error('Failed to find files:', err);
    res.status(404).send({ error: err.message });
  }
});

router.delete('/users/:userId/codes/:codeId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const codeId = req.params.codeId;
    const user = await User.findById(userId);

    // Find index of the code to be removed
    const codeIndex = user.codes.findIndex(code => code._id == codeId);

    if (codeIndex === -1) {
      // Code not found
      res.status(404).send('Code not found');
    } else {
      // Remove the code from the user's codes array
      user.codes.splice(codeIndex, 1);
      await user.save();

      res.status(204).send(); // No Content
    }
  } catch (err) {
    console.error('Failed to delete code:', err);
    res.status(500).send(err);
  }
});



module.exports=router;
