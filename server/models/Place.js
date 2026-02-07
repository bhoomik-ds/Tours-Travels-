const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "Rann of Kutch"
  description: { type: String, required: true },
  image: { type: String, required: true }, // URL from Cloudinary
  price: { type: Number, required: true }, // Ticket price
  location: { type: String, required: true }, // e.g., "Kutch, Gujarat"
});

module.exports = mongoose.model('Place', placeSchema);