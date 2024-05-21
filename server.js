// server.js

const express = require('express');
const app = express();
const errorHandler = require('./errorHandler'); // Ensure correct path
const validateRegistration = require('./validators');

app.use(express.json()); // To parse JSON bodies

app.post('/register', validateRegistration, (req, res) => {
  res.status(200).json({ message: 'User registered successfully' });
});

// Use error handling middleware
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
