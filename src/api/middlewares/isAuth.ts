import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../../config/index'

const isAuth = (req: Request | any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded: any = jwt.verify(token, config.jwtKey as string)
    req.headers.userId = decoded.user.id

    next()
  } catch (err) {
    return res.status(401).json({
      message: ' failed to get token',
    })
  }
}

export default isAuth
