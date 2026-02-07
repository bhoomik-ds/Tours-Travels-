const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  title: String,      // e.g., "About us"
  subtitle: String,   // e.g., "Junagadh Tourisum..."
  description: String,// The long paragraph
  image: String       // The image URL
});

module.exports = mongoose.model('About', aboutSchema);