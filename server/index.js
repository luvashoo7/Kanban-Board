const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const app = express();
const dbConnection = require('./dbconnection.js')

app.use(express.json()); 
dbConnection();

const kanbanBoardRoutes = require('./routes/boardRoutes.js');
const columnRoutes = require('./routes/columnRoutes.js');
const itemRoutes = require('./routes/itemRoutes.js');

app.use('/boards', kanbanBoardRoutes);
app.use('/columns', columnRoutes);
app.use('/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
