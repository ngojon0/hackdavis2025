const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userCont');

router.get('/', getAllUsers);

module.exports = router;