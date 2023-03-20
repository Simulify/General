const express = require('express');

const app = express();
//routes
app.get('/',(req,res)=>{
res.send('hello world !');
});
const dotenv = require('dotenv');


// Start the server 
app.listen(3000,()=>{
   console.log('index.js is running on port 3000')
});

const connectDB = require('./config/db');
//Load Config
dotenv.config({ path: '.config/config.env'});

connectDB();



