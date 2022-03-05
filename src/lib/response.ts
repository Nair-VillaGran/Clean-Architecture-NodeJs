/* eslint-disable no-useless-constructor */
import { Response } from 'express'
import { StatusCode, ResponseStatus } from './enums'
// import { IResponse } from '../interfaces/Interfaces'

export class ResponseTS {
  success (res: Response, message: string) {
    res.status(ResponseStatus.OK)
      .send({
        body: message,
        status: StatusCode.SUCCESS,
        error: '',
        date: new Date()
      })
  }

  error (res: Response, error?: TypeError | unknown, message?: string) {
    res.status(ResponseStatus.BAD_REQUEST)
      .send({
        error: error || message,
        status: StatusCode.FAILURE,
        body: '',
        date: new Date()
      })
  }
}
