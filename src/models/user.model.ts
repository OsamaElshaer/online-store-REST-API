import bcrypt from 'bcrypt'
import db from '../loaders/postgres'
import User from '../types/user.type'
import ApiError from '../helpers/error'

class UserModel {
  async create(user: User): Promise<User> {
    try {
      const connection = await db.connect()
      const sql =
        'INSERT INTO users (id, user_name, first_name, last_name, password) values ($1, $2, $3, $4, $5) returning *'
      const result = await connection.query(sql, [
        user.id,
        user.user_name,
        user.first_name,
        user.last_name,
        bcrypt.hashSync(user.password as string, 10),
      ])
      connection.release()
      return result.rows[0]
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        throw new ApiError('create user error', error.message)
      }
      throw error
    }
  }
  async show(id: number): Promise<User> {
    try {
      const sql = 'SELECT * FROM users WHERE id=($1)'
      const connection = await db.connect()
      const result = await connection.query(sql, [id])
      connection.release()
      return result.rows[0]
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        throw new ApiError('get user error', error.message)
      }
      throw error
    }
  }
  async index(): Promise<User[]> {
    try {
      const connection = await db.connect()
      const sql = 'SELECT * FROM users'
      const result = await connection.query(sql)
      connection.release()
      return result.rows
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        throw new ApiError('get users error', error.message)
      }
      throw error
    }
  }
}

export default UserModel
