const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// 1. GET ALL Services (Frontend will use this)
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. ADD a Service (You will use Postman for this)
router.post('/add', async (req, res) => {
  const newService = new Service({
    title: req.body.title,
    description: req.body.description,
    icon: req.body.icon
  });
  
  try {
    const savedService = await newService.save();
    res.json(savedService);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;