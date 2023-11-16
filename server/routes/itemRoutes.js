const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', itemController.createItem);

router.get('/column/:columnId', itemController.getItemsByColumn);

router.put('/:itemId', itemController.updateItem);

router.delete('/:itemId', itemController.deleteItem);

module.exports = router;