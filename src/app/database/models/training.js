const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  title: String,
  description: String,
  isRequired: Boolean
});

module.exports = mongoose.model('Training', trainingSchema);
