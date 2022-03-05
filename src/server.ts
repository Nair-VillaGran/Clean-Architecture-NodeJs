import express from 'express'
import morgan from 'morgan'
import { Routes } from './api/routes/Routes'
import { port } from './config/config'
const routes = new Routes()

export class Server {
  app: any;
  port: string
  constructor () {
    this.app = express()
    this.port = port
    this.app.use(express.json())
    this.app.set('port', port)
    this.app.use(morgan('dev'))
    this.app.use('/api', routes.Router)
  }
}
