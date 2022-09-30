const express = require('express');
const router = express.Router();
const movieController = require('../../controllers/api/movieController');

router.get('/', movieController.list)
router.post('/', movieController.store);
router.delete('/:id', movieController.delete )

module.exports = router;