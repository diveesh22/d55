const express = require('express');
const { getRankingsData } = require('../controllers/rankingsController');
const router = express.Router();

router.get('/', getRankingsData);

module.exports = router;
