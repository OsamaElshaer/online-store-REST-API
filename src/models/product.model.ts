import ApiError from '../helpers/error'
import db from '../loaders/postgres'
import Product from '../types/product.type'

class ProductModel {
  async create(p: Product): Promise<Product> {
    try {
      const connection = await db.connect()
      const sql =
        'INSERT INTO  products (name, price) values ($1, $2) RETURNING *'

      const result = await connection.query(sql, [p.name, p.price])

      connection.release()

      return result.rows[0]
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        throw new ApiError('create product error', error.message)
      }
      throw error
    }
  }

  async show(id: number): Promise<Product> {
    try {
      const connection = await db.connect()
      const sql = 'SELECT * FROM products WHERE id=($1)'
      const result = await connection.query(sql, [id])
      connection.release()
      return result.rows[0]
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        throw new ApiError('get product error', error.message)
      }
      throw error
    }
  }

  async index(): Promise<Product[]> {
    try {
      const connection = await db.connect()
      const sql = 'SELECT * FROM products'
      const result = await connection.query(sql)
      connection.release()
      return result.rows
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        throw new ApiError('retrive product error', error.message)
      }
      throw error
    }
  }
}

export default ProductModel
