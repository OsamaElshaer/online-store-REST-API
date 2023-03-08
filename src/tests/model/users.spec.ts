import UserModel from '../../models/user.model'
import db from '../../loaders/postgres'
import User from '../../types/user.type'

const userModel = new UserModel()

describe('Test users Model ', () => {
  const user = {
    id: 2,
    user_name: 'testUser',
    first_name: 'Test',
    last_name: 'User',
    password: 'test123',
  } as User

  it(' should return a User', async () => {
    const createdUser = await userModel.create(user)
    expect(createdUser).toEqual(
      jasmine.objectContaining({
        id: 2,
        user_name: 'testUser',
        first_name: 'Test',
        last_name: 'User',
      })
    )
  })

  it('should return All users', async () => {
    const users = await userModel.index()
    expect(users.length).not.toBe(0)
  })

  it('should return testUser when called with ID (2)', async () => {
    const returnedUser = await userModel.show(2)
    expect(returnedUser.id).toBe(2)
    expect(returnedUser.user_name).toBe('testUser')
  })
  afterAll(async () => {
    const connection = await db.connect()
    const sql =
      'DELETE FROM order_products;\nDELETE FROM orders;\nDELETE FROM users;\nDELETE FROM products;'
    await connection.query(sql)
    connection.release()
  })
})
