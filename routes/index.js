// Importing required modules and packages
const express = require('express'); // Importing Express web framework
const router = express.Router(); // Creating a router instance
const { User}  =require('../models/User');  // Importing User model 
const dotenv = require('dotenv'); // Importing dotenv package
const session = require('express-session'); // Importing express-session package

dotenv.config({ path: './config/config.env' }); // Loading environment variables from .env file

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


// Set up of the session property
router.use(session({
  secret: process.env.MY_SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));





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
