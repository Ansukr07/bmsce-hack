const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
