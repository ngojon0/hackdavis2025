const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: True,
  },
  qualifications: [String],
  availability: [String],

  isTrainer : {type: Boolean, default: false},
  isTrainee : {type: Boolean, default: false},

  trainingAccess: [String],

  assignedShifts: [
    {
      eventId: mongoose.Schema.Types.ObjectId,
      date: Date,
      hours: {
        type: Number,
        required: true, // Ensure each shift has a number of hours worked
        min: [0, 'Hours worked must be a positive number'], // Prevent negative hours
      },
    }
  ]
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
