const mongoose = require('mongoose');

// Define the schema for a message submitted via the contact form
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now } // Automatically records submission date
});

module.exports = mongoose.model('Message', messageSchema);