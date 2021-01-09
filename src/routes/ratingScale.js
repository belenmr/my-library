const express = require('express');
const router = express.Router();

const ratingScaleController = require('../controllers/ratingScaleController');

router.get('/', ratingScaleController.getRatingScale);

module.exports = router;