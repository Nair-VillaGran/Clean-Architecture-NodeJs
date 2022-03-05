import { Router } from 'express'
import { schemaSignIn } from '../../helpers/joi.schemas'
import { myFirstMiddleware, joiValidator } from '../middleware/Users.middleware'
import { welcomeController } from '../controllers/home.controllers'

export class Routes {
  Router: Router;

  constructor () {
    this.Router = Router()
    this.Router.route('/').post(myFirstMiddleware, joiValidator(schemaSignIn), welcomeController)
  }
}
