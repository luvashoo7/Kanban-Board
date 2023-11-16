const mongoose = require('mongoose');
const Board = require('../models/board');
const Column = require('../models/column');
const Item = require('../models/item');

beforeAll(async () => {
  await mongoose.connect('mongodb+srv://ashishrajstr:Mongo2023@cluster0.juryqwq.mongodb.net/kanban', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Board Model', () => {
  it('should create a new board', async () => {
    const newBoard = await Board.create({ name: 'Test Board', description: 'Test Description' });
    expect(newBoard.name).toBe('Test Board');
  });

});

describe('Column Model', () => {
  it('should create a new column', async () => {
    const newColumn = await Column.create({ name: 'Test Column', boardId: '6555e93903fd40fc93624149' });
    expect(newColumn.name).toBe('Test Column');
  });

});

describe('Item Model', () => {
  it('should create a new item', async () => {
    const newItem = await Item.create({
      name: 'Test Item',
      description: 'Test Item Description',
      columnId: '6555f3bce627b44e293ac059',
    });
    expect(newItem.name).toBe('Test Item');
  });

});
