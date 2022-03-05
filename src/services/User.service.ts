export class Userservice {
  static _userServiceIntance: any = null
  // eslint-disable-next-line no-useless-constructor
  constructor () {}

  // Singleton pattern
  static getInstance () {
    if (!Userservice._userServiceIntance) { Userservice._userServiceIntance = new Userservice() }
    return Userservice._userServiceIntance
  }

  static login (email: string, password: number | string) {
    if (email !== 'admin@epn.edu.ec') return false
    if (password !== 'admin') return false
    return true
  }
}
