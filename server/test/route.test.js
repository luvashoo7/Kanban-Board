const request = require('supertest');
const express = require('express');
const columnRoutes = require('../routes/columnRoutes');

const app = express();
app.use(express.json());
app.use('/columns', columnRoutes);

describe('Column Routes', () => {
  it('should create a new column via POST request', async () => {
    const res = await request(app)
      .post('/columns')
      .send({ name: 'New Column', boardId: '6555e93903fd40fc93624149' });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('New Column');
  });

  it('should update an existing column via PUT request', async () => {
    const createRes = await request(app)
      .post('/columns')
      .send({ name: 'Test Column', boardId: '6555e93903fd40fc93624149' });

    const updateRes = await request(app)
      .put(`/columns/${createRes.body._id}`)
      .send({ name: 'Updated Column' });

    expect(updateRes.statusCode).toBe(200);
    expect(updateRes.body.name).toBe('Updated Column');
  });

  it('should delete an existing column via DELETE request', async () => {
    const createRes = await request(app)
      .post('/columns')
      .send({ name: 'Test Column', boardId: '6555e93903fd40fc93624149' });

    const deleteRes = await request(app).delete(`/columns/${createRes.body._id}`);
    expect(deleteRes.statusCode).toBe(200);
    expect(deleteRes.body.message).toBe('Column deleted successfully');
  });

});
