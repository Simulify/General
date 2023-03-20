const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true,
    enum: ['beginner', 'intermediate', 'advanced'] // Add an enum validator for the level field
  },
  createdAt: { // Rename the field to camelCase
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
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['Exemple', 'Personnel'] // Add an enum validator for the type field
    }
  }]
});

const User = mongoose.model('User', userSchema);

module.exports.User = mongoose.model('User', userSchema);
