import { Router } from 'express'
// import { IRoutes } from '../interfaces/Interfaces'
import { schemaSignIn } from '../../helpers/joi.schemas'
// import { welcomeController } from '../controllers/home.controllers'
import { myFirstMiddleware, joiValidator } from '../middleware/Users.middleware'
import { welcomeController } from '../controllers/home.controllers'

export class Routes {
  Router: Router;

  constructor () {
    this.Router = Router()
    this.Router.route('/').post(myFirstMiddleware, joiValidator(schemaSignIn), welcomeController)
  }
  // Welcome = async (req: Request, res: Response) => {
  //   try {
  //     const data:any = req.body
  //     const result:any = await this.moduloService.welcomeController(data)
  //     if (!result) return this.error(res, 'No se pudo realizar la acción')
  //     this.success(res, 'Acción realizada correctamente')
  //   } catch (error) {
  //     this.error(res, error)
  //     throw error
  //   }
  // }
}
