const express = require('express');
const router = express.Router();
const columnController = require('../controllers/columnController');

router.post('/', columnController.createColumn);
router.get('/:boardId', columnController.getColumns);
router.put('/:columnId', columnController.updateColumn);
router.delete('/:columnId', columnController.deleteColumn);

module.exports = router;
