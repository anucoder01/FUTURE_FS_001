const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

// Nodemailer transporter setup (using environment variables for security)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Change if using a different provider (e.g., 'outlook', 'sendgrid')
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// @route   POST /api/contact
// @desc    Save new message to DB and send email notification
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic input validation
  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please enter all required fields.' });
  }

  try {
    // 1. Save the message to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // 2. Send email notification to yourself
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // The recipient is your own configured email
      subject: `[New Portfolio Inquiry] from ${name}`,
      html: `
        <p>You have received a new message from your portfolio website:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;">${message}</p>
        <p>Saved to MongoDB successfully.</p>
      `
    };

    // Nodemailer sends the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ msg: 'Message sent and saved successfully! I will contact you soon.' });

  } catch (err) {
    console.error('Contact Form Submission Error:', err);
    // Return a generic error to the user
    res.status(500).json({ msg: 'Server Error: Failed to process submission. Check console for details.' });
  }
});

module.exports = router;