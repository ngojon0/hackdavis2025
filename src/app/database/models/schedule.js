const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  volunteer: { type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' },
  event: String,
  date: Date,
  durationHours: Number,
  location: String
});

module.exports = mongoose.model('Schedule', scheduleSchema);
