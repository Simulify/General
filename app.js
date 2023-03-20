const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load Config & connect to the database
dotenv.config({ path: '.config/config.env'});
connectDB();

// Import routes
const userRoutes = require("./routes/index");

// Set up middleware
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);

// Start the server 
app.listen(3000, () => {
   console.log('Server is running on port 3000');
});
