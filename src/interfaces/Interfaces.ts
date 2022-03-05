import { Router } from 'express'

export interface IRoutes {
  Router: Router
}

export interface IResponse {
  success: (res: Response, message: string, statusCode: number) => void
}

export interface IRequestCome {
  email: string,
  password: string
}
