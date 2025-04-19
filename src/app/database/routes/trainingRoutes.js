const express = require('express');
const router = express.Router();
const { createTraining, getTrainings } = require('../controllers/trainingCont');

router.post('/', createTraining);
router.get('/', getTrainings);

module.exports = router;