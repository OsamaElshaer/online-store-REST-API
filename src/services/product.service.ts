import { Request, Response, NextFunction } from 'express'

import ProductModel from '../models/product.model'
import OrderModel from '../models/order.model'
const productModel = new ProductModel()
const orderModel = new OrderModel()

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await productModel.create(req.body)
    res.json({
      message: 'Product created successfully',
      product: product,
    })
  } catch (error) {
    next(error)
  }
}

export const index = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await productModel.index()
    res.json({
      message: 'All Products',
      products: products,
    })
  } catch (error) {
    next(error)
  }
}
export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productModel.show(req.params.id as unknown as number)
    res.json({
      message: `Product:${product.name}`,
      product: product,
    })
  } catch (error) {
    next(error)
  }
}

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const orderObj: unknown = {
    orderId: req.body.orderId,
    prodId: req.params.pordId,
    quantity: req.body.quantity as unknown as number,
  }
  try {
    const order = await orderModel.createOrder(orderObj)
    return res.json({
      msg: 'order_product creates successfully',
      order_product: order,
    })
  } catch (error) {
    next(error)
  }
}
