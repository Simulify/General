const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profileUrl: {
    type: String,
    default: ''
  },
  
  level: {
    type: String,
    required: true,
    enum: ['beginner', 'intermediate', 'advanced'], // Add an enum validator for the level field
    default: 'beginner'
  },
  createdAt: { 
    type: Date,
    default: Date.now
  },
  codes: [{
    title: {
      type: String,
      required: true
    },
    codeHexa: {
      type: String,
    },
    codeMemo: {
      type: String,
    },
   

   
  }]
});

module.exports = mongoose.model('User', userSchema);
