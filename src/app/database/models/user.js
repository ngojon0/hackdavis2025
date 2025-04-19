const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // hash it!
  role: { type: String, enum: ['Volunteer', 'Manager'], default: 'Volunteer'}
});

module.exports = mongoose.model('User', userSchema);
