const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');

// Route to upload a single file
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  
  // Cloudinary automatically adds the 'path' property with the URL
  res.json({
    message: 'Image uploaded successfully!',
    url: req.file.path // This is the Cloudinary URL
  });
});

module.exports = router;