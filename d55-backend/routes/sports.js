const express = require('express');
const { getSportsData } = require('../controllers/sportsController');
const router = express.Router();

router.get('/', getSportsData);

module.exports = router;
