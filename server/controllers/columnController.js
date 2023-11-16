const Column = require('../models/column');

exports.createColumn = async (req, res) => {
  try {
    const { name, boardId } = req.body;
    const newColumn = await Column.create({ name, boardId });
    res.status(201).json(newColumn);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getColumns = async (req, res) => {
  try {
    const { boardId } = req.params;
    const columns = await Column.find({ boardId });
    res.status(200).json(columns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateColumn = async (req, res) => {
    try {
      const { columnId } = req.params;
      const { name } = req.body;
      const updatedColumn = await Column.findByIdAndUpdate(
        columnId,
        { name },
        { new: true }
      );
      if (!updatedColumn) {
        return res.status(404).json({ message: 'Column not found' });
      }
      res.status(200).json(updatedColumn);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.deleteColumn = async (req, res) => {
    try {
      const { columnId } = req.params;
      const deletedColumn = await Column.findByIdAndDelete(columnId);
      if (!deletedColumn) {
        return res.status(404).json({ message: 'Column not found' });
      }
      res.status(200).json({ message: 'Column deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
