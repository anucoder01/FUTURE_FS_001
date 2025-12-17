const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const contactRoutes = require('./api/contactRoutes'); // Import the contact routes

const app = express();
const PORT = process.env.PORT || 5000;

// Set up CORS - only allow requests from your frontend URL
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Adjust based on your client's running port
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // allow session cookies from browser to pass to api
};

// --- Middleware ---
app.use(cors(corsOptions)); 
app.use(express.json()); // Allows parsing JSON body from requests

// --- Database Connection (MongoDB Atlas) ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connection successful.'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- API Routes ---
// Route for handling contact form submissions
app.use('/api/contact', contactRoutes);

// --- Simple Root Route ---
app.get('/', (req, res) => {
  res.send('Portfolio Backend API is running!');
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});