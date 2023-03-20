const express = require('express');
const router = express.Router();
const { User } = require('../models/User');

// POST request to create a new user
router.post('/users', async (req, res) => {
  try {
    const { email, password, username, level, created_at, codes } = req.body;
    const user = new User({ email, password, username, level, created_at, codes });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// GET request to retrieve all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
