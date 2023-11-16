const mongoose = require('mongoose');

const kanbanBoardSchema = mongoose.Schema({
  name: String,
  description: String,
  columns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Column' }],
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
});

module.exports = mongoose.model('KanbanBoard', kanbanBoardSchema);
