// server.js
const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for patient records
let patients = [];

// API endpoint to register a new patient
app.post('/api/patients', (req, res) => {
  const patient = req.body;
  // Optionally, you can add validation or generate a unique ID here
  patients.push(patient);
  res.status(201).json({ message: 'Patient registered successfully', patient });
});

// API endpoint to retrieve all patients
app.get('/api/patients', (req, res) => {
  res.json(patients);
});

// Start the server on PORT (defaulting to 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
