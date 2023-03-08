import supertest from 'supertest'
import db from '../../loaders/postgres'
import app from '../../loaders/express'

const request = supertest(app)

let userToken = ''

describe('product operation', () => {
  beforeAll(async () => {
    const res = await request.post('/api/users/register').send({
      id: 10,
      user_name: 'testUser10',
      first_name: 'test',
      last_name: 'testan',
      password: 'hfvhkfkvfg',
    })

    expect(res.status).toBe(200)
    const { user_name } = res.body.user
    expect(user_name).toBe('testUser10')
    const { token } = res.body
    userToken = token
  })

  it('should create new product', async () => {
    const res = await request
      .post('/api/products/')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        name: 'apple',
        price: 2.55,
      })
    expect(res.status).toBe(200)
    expect(res.body.product.name).toBe('apple')
  })
  it('should get list of products', async () => {
    const res = await request.get('/api/products/')
    expect(res.status).toBe(200)
    expect(res.body.products.length).not.toBe(0)
  })
  it('should get product', async () => {
    const res = await request.get('/api/products/1')
    expect(res.status).toBe(200)
    expect(res.body.product.id).toBe(1)
  })
  it('shoud create order product', async () => {
    const res = await request
      .post('/api/products/1/order')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        orderId: 1,
        quantity: 2,
      })
    expect(res.status).toBe(200)
    expect(res.body.order_product.id).toBe(1)
  })
  it('should get all orders of sepacific  user', async () => {
    const res = await request
      .get('/api/orders/users/1')
      .set('Authorization', `Bearer ${userToken}`)
    expect(res.status).toBe(200)
    expect(res.body.order.products.length).not.toBe(0)
  })
})
