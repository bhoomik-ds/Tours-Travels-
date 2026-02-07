const multer = require('multer');
const { storage } = require('../config/cloudinary'); // Import from step 2

const upload = multer({ storage: storage });

module.exports = upload;