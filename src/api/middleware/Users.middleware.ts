import { NextFunction, Request, Response } from 'express'
import { Schema } from 'joi'
import { Console } from '../../lib/console'
import { ResponseTS } from '../../lib/response'
const rsp = new ResponseTS()
const clg = new Console('Middleware')

export const myFirstMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  clg.success('Middleware running...')
  next()
}

export const joiValidator = (schema: Schema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body); next()
    } catch (error) {
      rsp.error(res, error)
      clg.actionIncorrect(error)
    }
  }
}
