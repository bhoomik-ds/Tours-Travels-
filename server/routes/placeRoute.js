const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

// 1. GET ALL PLACES (For your Frontend)
router.get('/', async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 2. ADD A PLACE (For you/Admin)
router.post('/add', async (req, res) => {
  const { name, description, image, price, location } = req.body;
  
  try {
    const newPlace = new Place({ name, description, image, price, location });
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;