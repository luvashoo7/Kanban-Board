const KanbanBoard = require('../models/board');

exports.createKanbanBoard = async (req, res) => {
    try {
      const { name, description } = req.body;
      
      const defaultColumns = [
        { name: 'To Do' },
        { name: 'In Progress' },
        { name: 'Completed' }
      ];
  
      const newBoard = await KanbanBoard.create({ 
        name, 
        description, 
        columns: defaultColumns,
        items: [] 
      });
      
      res.status(201).json(newBoard);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.getAllKanbanBoards = async (req, res) => {
  try {
    const boards = await KanbanBoard.find();
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateKanbanBoard = async (req, res) => {
  try {
    const { name, description } = req.body;
    const updatedBoard = await KanbanBoard.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    res.status(200).json(updatedBoard);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteKanbanBoard = async (req, res) => {
  try {
    await KanbanBoard.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
