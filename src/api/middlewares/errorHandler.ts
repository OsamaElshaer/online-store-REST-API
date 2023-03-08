import { NextFunction, Request, Response } from 'express'

const globalHandlerError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.json({
    name: err.name,
    msg: err.message,
    stack: err.stack,
  })
}
export default globalHandlerError
