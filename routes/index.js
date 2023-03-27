// Importing required modules and packages
const express = require('express'); // Importing Express web framework
const router = express.Router(); // Creating a router instance
const { User } = require('../models/User'); // Importing User model
const dotenv = require('dotenv'); // Importing dotenv package
const session = require('express-session'); // Importing express-session package

dotenv.config({ path: './config/config.env' }); // Loading environment variables from .env file

// Beginning Auth0 snippet
const { auth } = require('express-openid-connect'); // Importing Auth0 package

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: process.env.BASE_URL,
  clientID:process.env.AUTH0_CLIENT_ID,
  issuerBaseURL:process.env.AUTH0_ISSUER_BASE_URL
}; // Configuration object for Auth0

// Attaching /login, /logout, and /callback routes to the router instance
router.use(auth(config));

// Route to handle GET request for the root URL
// If the user is not authenticated, redirect to /login URL
router.get('/', (req, res) => {
  if (!req.oidc.isAuthenticated()) {
    return res.redirect('/login');
  }
  res.send('Logged in');
});

// Route to handle GET request for /login URL
// Calls auth middleware to authenticate the user
// Redirects to root URL
router.get('/login', auth(config), (req, res) => {
  res.redirect('/');
});

// End Auth0 snippet

// Middleware to require authentication to access /profile URL
const { requiresAuth } = require('express-openid-connect');

// Route to handle GET request for /profile URL
// Requires authentication to access the route
// Sends a JSON response with the authenticated user's information
router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// Route to handle POST request to create a new user
router.post('/users', async (req, res) => {
  try {
    const { email, password, username, level, created_at, codes } = req.body;
    const user = new User({ email, password, username, level, created_at, codes }); // Creating a new user instance
    await user.save(); // Saving the new user to the database
    res.status(201).json(user); // Sending a JSON response with the new user's information
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Route to handle GET request to retrieve all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Finding all users in the database
    res.json(users); // Sending a JSON response with all users' information
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router; // Exporting the router instance



/*This code defines routes for a Node.js application using the Express framework. 
It includes functionality for user authentication using Auth0, as well as CRUD (Create, Read, Update, Delete) 
operations for a user model. 
The code also loads configuration variables from a .env file using the dotenv package.
 Overall, this code serves as a basic template for building a Node.js application with user
  authentication and database functionality.*/