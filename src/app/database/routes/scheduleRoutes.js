const express = require('express');
const router = express.Router();
const { createSchedule, getSchedules } = require('../controllers/scheduleCont');

router.post('/', createSchedule);
router.get('/', getSchedules);

module.exports = router;