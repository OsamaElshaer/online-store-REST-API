import ApiError from '../helpers/error'
import db from '../loaders/postgres'
import Order from '../types/order.type'

class OrderModel {
  async create(o: any): Promise<unknown> {
    try {
      const connection = await db.connect()
      const sql =
        'INSERT INTO orders (user_id, status) values ($1, $2) RETURNING *'

      const result = await connection.query(sql, [o.userId, o.status])

      const order = result.rows[0]

      connection.release()

      return {
        id: order.id,
        status: order.status,
        userId: +order.user_id,
      }
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        throw new ApiError('create product error', error.message)
      }
      throw error
    }
  }

  async getOrderByUserId(userId: number): Promise<Order> {
    try {
      const sql =
        "SELECT o.id AS id, u.user_name, o.user_id, JSON_AGG(JSONB_BUILD_OBJECT('productId', p.id, 'name', p.name, 'price', p.price, 'quantity', op.quantity)) AS products, o.status AS status FROM orders AS o LEFT JOIN order_products AS op ON o.id = op.order_id LEFT JOIN products AS p ON op.product_id = p.id LEFT JOIN users AS u ON u.id = o.user_id WHERE o.user_id = $1 AND o.status = 'active' GROUP BY o.id, u.user_name, o.status, o.user_id"

      const connection = await db.connect()
      const result = await connection.query(sql, [userId])

      connection.release()
      return result.rows[0]
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        throw new ApiError('create product error', error.message)
      }
      throw error
    }
  }

  async createOrder(o: any): Promise<any> {
    try {
      const connection = await db.connect()
      const sql =
        'INSERT INTO order_products(order_id,product_id, quantity) values($1, $2, $3) RETURNING *'
      const result = await connection.query(sql, [
        o.orderId,
        o.prodId,
        o.quantity,
      ])
      connection.release()
      return result.rows[0]
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        throw new ApiError('create order error', error.message)
      }
      throw error
    }
  }
}

export default OrderModel
