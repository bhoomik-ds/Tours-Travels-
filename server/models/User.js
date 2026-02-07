const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // We will hash this later
  role: { 
    type: String, 
    enum: ['user', 'admin'], // Only these two values allowed
    default: 'user' 
  }
});

module.exports = mongoose.model('User', userSchema);