const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Contact form submission
app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, address, subject, message } = req.body;

  console.log('--- New Contact Form Submission ---');
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone || 'Not provided'}`);
  console.log(`Address: ${address || 'Not provided'}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log('----------------------------------');

  res.json({ success: true, message: 'Thank you! Your message has been received.' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Maplewood Heights HOA website running at http://localhost:${PORT}`);
});
