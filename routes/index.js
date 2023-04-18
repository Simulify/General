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
dotenv.config({ path: './config/config.env' }); // Loading environment variables from .env file

router.use(session({
  secret: process.env.MY_SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));


// Set up Passport middleware
router.use(passport.initialize());
router.use(passport.session());




// Initialize Passport middleware
passport.use(new LocalStrategy(
  async function(username, password, done) {
    const user = await User.findOne({ username });
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});


passport.deserializeUser(async function(id, done) {
  const user = await User.findById(id);
  if (!user) {
    return done(new Error('User not found'));
  }
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
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    // Log in the new user and redirect to the user's dashboard
    req.login(user, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send({ error: 'Server error1' });
      }
     
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Server error2' });
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

    // Send back the token
    return res.status(200).send({ token });

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
      // Authentication succeeded, redirect to user dashboard
      return res.redirect('/dashboard');
    });
  })(req, res, next);
}

// Log in a user
router.post('/login', login);


// Log out a user
router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/homePage', isAuthenticated, async (req, res) => {
  try {
    // Get the current user's information
    const currentUser = req.user;
    const userId = currentUser._id;
    console.log('Current user:', currentUser);

    // Determine the user's space
    const user = await User.findById(userId);
    const userSpace = `/user-space/${user.username}`;
    console.log('User space:', userSpace);

    // Redirect the user to their space
    res.redirect(userSpace);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'Server Error' });
  }
});


router.get('/user-space/:username', isAuthenticated, (req, res) => {
  try {
    // Render the user's dashboard
    const username = req.params.username;
    res.render('user-dashboard', { username });
  } catch (error) {
    res.status(500).send({ error: 'Server Error' });
  }
});

// Middleware to check if a user is authenticated
function isAuthenticated(req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send({ error: 'Unauthorized' });
}







// Define the POST endpoint to create a new user
router.post('/users', async (req, res) => { //tick
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




// Get a user by ID
router.get('/users', async (req, res) => { //tick
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
router.delete('/users/:userId', async (req, res) => { //tick
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





// Create a new code for a user
router.post('/users/:userId/codes', async (req, res) => { //tick
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

async function createCode(userId, codeData) { //tick
  const user = await User.findById(userId);

  const newCode = {
    title: codeData.title,
    codeHexa: codeData.codeHexa,
    type: codeData.type,
    description: codeData.description // Use the new description field
  };

  user.codes.push(newCode);
  await user.save();

  return user.codes[user.codes.length - 1]; // Return the newly created code
}

// Read a code by ID for a user
router.get('/users/:userId/codes/:codeId', async (req, res) => {//tick
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
async function getCode(userId, codeId) {//tick
  const user = await User.findById(userId);

  const code = user.codes.id(codeId);

  if (!code) {
    throw new Error('Code not found');
  }

  return code;
}

// Update a code by ID
router.put('/users/:userId/codes/:codeId', async (req, res) => {//tick
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
    if (req.body.title) {//tick
      code.title = req.body.title;
    }
    if (req.body.codeHexa) {
      code.codeHexa = req.body.codeHexa;
    }
    if (req.body.type) {
      code.type = req.body.type;
    }

    await user.save();
    res.json(code);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports=router;
