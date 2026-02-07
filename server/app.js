require("dotenv").config();
console.log("Loaded Env Variables:", Object.keys(process.env).filter(key => key.startsWith('MONGO') || key.startsWith('CLOUD'))); 
// This will print the names of the variables it found
// require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// --- Import Routes ---
const uploadRoute = require('./routes/uploadRoute');
const placeRoute = require('./routes/placeRoute');
const authRoute = require('./routes/authRoute');

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Routes ---

// 1. Test Route
app.get("/api/message", (req, res) => {
  res.json({ message: "Backend is connected successfully!" });
});

// 2. Upload Route
app.use('/api/upload', uploadRoute);

// 3. Places Route
app.use('/api/places', placeRoute);

// 4. Auth Route
app.use('/api/auth', authRoute);


// Change MONGO_URI to MONGODB_URI
console.log("My Mongo URI is:", process.env.MONGODB_URI); 

mongoose.connect(process.env.MONGODB_URI) // <--- Update this variable name
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
// --- Start Server ---
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const serviceRoute = require('./routes/serviceRoute'); // Import it
app.use('/api/services', serviceRoute); // Use it

const tourRoute = require('./routes/tourRoute');
app.use('/api/tours', tourRoute);

const aboutRoute = require('./routes/aboutRoute');
app.use('/api/about', aboutRoute);