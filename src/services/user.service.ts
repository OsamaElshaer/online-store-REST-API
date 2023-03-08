import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import UserModel from '../models/user.model'
import config from '../config'

const userModel = new UserModel()

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.create(req.body)
    const token = jwt.sign({ user }, config.tokenSecret as string)
    res.json({
      message: `user created successfully `,
      token: token,
      user: user,
    })
  } catch (error) {
    next(error)
  }
}

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.show(req.params.id as unknown as number)
    res.json({
      user: user,
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
    const users = await userModel.index()
    res.json({
      message: 'users retrieved successfully',
      users: users,
    })
  } catch (err) {
    next(err)
  }
}
