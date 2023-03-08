import supertest from 'supertest'
import app from '../../loaders/express'

const request = supertest(app)
let userToken = ''

describe('user operation', () => {
  it('should create new user', async () => {
    const res = await request.post('/api/users/register').send({
      id: 1,
      user_name: 'osamaelshaer',
      first_name: 'osama',
      last_name: 'elshaer',
      password: 'actifdgdsve',
    })
    expect(res.status).toBe(200)
    expect(res.body.user.user_name).toBe('osamaelshaer')
    expect(res.body.user.id).toBe(1)
    const { token } = res.body
    userToken = token
  })

  it('should get user', async () => {
    const res = await request
      .get('/api/users/1')
      .set('Authorization', `Bearer ${userToken}`)
    expect(res.status).toBe(200)
    expect(res.body.user.id).toBe(1)
    expect(res.body.user.user_name).toBe('osamaelshaer')
  })

  it('should get list of all users', async () => {
    const res = await request
      .get('/api/users/')
      .set('Authorization', `Bearer ${userToken}`)
    expect(res.status).toBe(200)
    expect(res.body.users.length).not.toBe(0)
  })
  it('shoud create order', async () => {
    const res = await request
      .post('/api/orders')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        status: 'active',
      })
    expect(res.status).toBe(200)
    expect(res.body.order.id).toBe(1)
  })
})
