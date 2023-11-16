const express = require('express');
const router = express.Router();
const kanbanBoardController = require('../controllers/boardController');

router.post('/', kanbanBoardController.createKanbanBoard);
router.get('/', kanbanBoardController.getAllKanbanBoards);
router.put('/:id', kanbanBoardController.updateKanbanBoard);
router.delete('/:id', kanbanBoardController.deleteKanbanBoard);

module.exports = router;