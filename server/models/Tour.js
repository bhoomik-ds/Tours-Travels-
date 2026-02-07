const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String
});

module.exports = mongoose.model('Tour', tourSchema);