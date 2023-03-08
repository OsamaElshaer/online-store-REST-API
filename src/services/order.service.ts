import { Request, Response, NextFunction } from 'express'
import OrderModel from '../models/order.model'

const orderModel = new OrderModel()

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const obj = {
      userId: req.headers.userId,
      status: req.body.status,
    }
    const order = await orderModel.create(obj)
    res.json({
      message: 'Order created successfully',
      order: order,
    })
  } catch (err) {
    next(err)
  }
}

export const getUserOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await orderModel.getOrderByUserId(
      req.params.id as unknown as number
    )
    res.json({
      message: 'Order retrieved successfully',
      order: order,
    })
  } catch (err) {
    next(err)
  }
}
