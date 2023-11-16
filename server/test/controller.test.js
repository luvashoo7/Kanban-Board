const mongoose = require('mongoose');
const Column = require('../models/column');

// Establish a connection to a test database
beforeAll(async () => {
    await mongoose.connect('mongodb+srv://ashishrajstr:Mongo2023@cluster0.juryqwq.mongodb.net/kanban', {
        useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Column Model', () => {
  it('should create a new column', async () => {
    const newColumn = await Column.create({ name: 'Test Column', boardId: '6555e93903fd40fc93624149' });
    expect(newColumn.name).toBe('Test Column');
  });

  it('should update an existing column', async () => {
    const createdColumn = await Column.create({ name: 'Test Column', boardId: '6555e93903fd40fc93624149' });
    const updatedColumn = await Column.findByIdAndUpdate(
      createdColumn._id,
      { name: 'Updated Column' },
      { new: true }
    );
    expect(updatedColumn.name).toBe('Updated Column');
  });

  it('should delete an existing column', async () => {
    const createdColumn = await Column.create({ name: 'Test Column', boardId: '6555e93903fd40fc93624149' });
    await Column.findByIdAndDelete(createdColumn._id);
    const deletedColumn = await Column.findById(createdColumn._id);
    expect(deletedColumn).toBeNull();
  });

  // Additional tests for specific column functionalities and validations
});
