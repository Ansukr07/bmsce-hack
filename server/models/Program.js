const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['Bachelor', 'Masters', 'PhD'], required: true },
  department: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Program', programSchema);
