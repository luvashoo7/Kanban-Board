const Item = require('../models/item');

// Create a new item
exports.createItem = async (req, res) => {
    try {
      const { name, description, dueDate, columnId } = req.body;
      if (!name || !columnId) {
        return res.status(400).json({ message: 'Name and columnId are required' });
      }
      const newItem = await Item.create({ name, description, dueDate, columnId });
      res.status(201).json(newItem);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create item', error: err.message });
    }
  };
  
  // Get all items in a column
  exports.getItemsByColumn = async (req, res) => {
    try {
      const { columnId } = req.params;
      const items = await Item.find({ columnId });
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch items', error: err.message });
    }
  };
  
  // Update an item
  exports.updateItem = async (req, res) => {
    try {
      const { itemId } = req.params;
      const updatedItem = await Item.findByIdAndUpdate(itemId, req.body, { new: true });
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json(updatedItem);
    } catch (err) {
      res.status(500).json({ message: 'Failed to update item', error: err.message });
    }
  };
  
  // Delete an item
  exports.deleteItem = async (req, res) => {
    try {
      const { itemId } = req.params;
      const deletedItem = await Item.findByIdAndDelete(itemId);
      if (!deletedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Failed to delete item', error: err.message });
    }
  };
