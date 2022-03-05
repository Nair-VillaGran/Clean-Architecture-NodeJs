/* eslint-disable no-useless-constructor */
export class Model {
  static _ModelIntance: any = null
  constructor () {}

  static getInstance () {
    if (!Model._ModelIntance) Model._ModelIntance = new Model()
    return Model._ModelIntance
  }
}
