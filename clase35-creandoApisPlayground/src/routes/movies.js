const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list);
router.get('/search', moviesController.search);
router.get('/:id', moviesController.show);
router.post('/', moviesController.store);
router.delete('/:id', moviesController.delete);

module.exports = router;