const express = require('express');
const router = express.Router();
const About = require('../models/About');

// Get About Data
router.get('/', async (req, res) => {
  try {
    const aboutData = await About.find();
    res.json(aboutData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add About Data
router.post('/add', async (req, res) => {
  const newAbout = new About(req.body);
  try {
    const savedAbout = await newAbout.save();
    res.json(savedAbout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;