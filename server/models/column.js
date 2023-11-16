const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema({
  name: String,
  boardId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Column', columnSchema);
