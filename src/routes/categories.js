const express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categoriesController');

router.get('/', categoriesController.getCategories);
router.get('/:name', categoriesController.getBooksByCategory);

module.exports = router;