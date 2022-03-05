/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import request from 'supertest'
import { Server } from '../server'

const api = request(new Server().app)

describe('POST /api/', () => {
  test('should respond with a 200 status code', async () => {
    const response:any = await api
      .post('/api/')
      .send({
        email: 'admin@epn.edu.ec',
        password: 'admin'
      })

    expect(response.statusCode).toBe(200)
  })

  test('should have a content-type: application/json in header', async () => {
    const response:any = await api
      .post('/api/')
      .send({
        // Static Data
        email: 'admin@epn.edu.ec',
        password: 'admin'
      })
      .expect('content-Type', /application\/json/)
  })
})
