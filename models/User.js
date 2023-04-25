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
  picture: {
    type: String,
    default: 'https://example.com/default-profile-picture.jpg' // Set the default value to a URL for a default profile image
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
    code: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['Exemple', 'Personnel'] // Add an enum validator for the type field
    },
    category: {
      type: String,
      enum: ['Arithmétiques', 'Logiques', 'Branchements', 'Transfert', 'Décalages'] // Add an enum validator for the category field
    }
  }]
});

module.exports = mongoose.model('User', userSchema);
