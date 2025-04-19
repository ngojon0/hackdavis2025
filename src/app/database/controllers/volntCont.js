const Volunteer = require('../models/volunteer');

exports.createVolunteer = async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json(newVolunteer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id).populate('user');
    res.json(volunteer);
  } catch (err) {
    res.status(404).json({ error: 'Volunteer not found.'});
  }
};
