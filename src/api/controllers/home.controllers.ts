import { Request, Response } from 'express'
import { Console } from '../../lib/console'
import { Userservice } from '../../services/User.service'
import { ResponseTS } from '../../lib/response'
const clg = new Console('Routes')
const response = new ResponseTS()

export const welcomeController = (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const isLoggedIn = Userservice.login(email, password)
    if (!isLoggedIn) return response.error(res, 'Invalid email or password')
    clg.actionCorrect(); return response.success(res, `User Logged in,welcome to my Api [ ${email} ]`)
  } catch (err) {
    clg.actionIncorrect(err); return response.error(res, 'Error in WelcomeController')
  }
}
