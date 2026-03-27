const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/programs', require('./routes/programRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/faculty', require('./routes/facultyRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/chatbot', require('./routes/chatbotRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Database Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/college_db';

const startServer = () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    startServer();
  })
  .catch((err) => {
    console.log('DB Connection Error: ', err.message);
    console.log('Starting server without database-backed collections.');
    startServer();
  });
