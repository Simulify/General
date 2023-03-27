// Import the Express library
const express = require('express');

// Create an instance of the app
const app = express();

// Import the dotenv library for loading environment variables
const dotenv = require('dotenv');

// Import the function that connects to the database
const connectDB = require('./config/db');

// Import the indexRoutes module
const indexRoutes = require('./routes/index');

// Load the configuration file and connect to the database
dotenv.config({ path: './config/config.env' });
connectDB();

// Set up middleware to parse JSON data
app.use(express.json());

// Use the indexRoutes module for all requests starting with '/api/users'
app.use('/api/users', indexRoutes);

// Use the indexRoutes module for all other requests
app.use('/', indexRoutes);

// Export the app for use in other modules
module.exports = app;

// Start the server on the specified port (or 3000 if not specified)
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
/* In summary, this code sets up an Express server, loads environment variables from a config file,
 connects to a database, sets up middleware to parse JSON data, and specifies the routing of requests
  using the indexRoutes module. Finally, it exports the app for use in other modules and starts the 
  server on the specified port.*/