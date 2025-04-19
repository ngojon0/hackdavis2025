const express = require('express');
const router = express.Router();
const { createVolunteer, getVolunteer } = require('../controllers/volunteerCont');

router.post('/', createVolunteer);
router.get('/:id', getVolunteer);

module.exports = router;