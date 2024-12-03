const express = require('express');
const { getEnrollmentData } = require('../controllers/enrollmentController');
const router = express.Router();

router.get('/', getEnrollmentData);

module.exports = router;
