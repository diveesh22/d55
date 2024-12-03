const express = require('express');
const { getResearchData } = require('../controllers/researchController');
const router = express.Router();

router.get('/', getResearchData);

module.exports = router;
