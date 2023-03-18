const express = require('express');
const mongoose = require('mongoose');

const app = express();
  

//routes
app.get('/',(req,res)=>{
res.send('hello world !!!');
});


app.get('/Welcome',(req,res)=>{
    res.send('Welcome to Simulify !');
})
 
// Start the server
app.listen(3000,()=>{
   console.log('index is running on port 3000')
});
