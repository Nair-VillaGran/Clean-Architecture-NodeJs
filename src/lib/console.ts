import Colors from 'colors'
import { PlusMessage, envi } from './enums'
import { environment } from '../config/config'

export class Console {
  moduleName: string
  err: unknown
  environment: string | undefined

  constructor (moduleName: string) {
    this.moduleName = moduleName
  }

  successWelcome () {
    console.log(`${Colors.blue(`[${this.moduleName.toUpperCase()}]`)} ${Colors.yellow(PlusMessage.CORRECT_CONECTION)}` +
' ->> ' +
`${Colors.red(new Date().toUTCString())}
${Colors.blue(`[${this.moduleName.toUpperCase()}] ${Colors.green('Server configuring...')}`)}
${Colors.blue(`[${this.moduleName.toUpperCase()}] ${Colors.green('Server is running ✅')}`)}
${Colors.blue(`[${envi.ENVIRONMENT}] ${Colors.yellow(environment!)} 🖥️`)}`
    )
  }

  success (message: string) {
    console.log(
      `${Colors.blue(`[${this.moduleName.toUpperCase()}] `)}` +
        Colors.yellow(`${message} ->> `) +
        `${Colors.red(new Date().toUTCString())}`
    )
  }

  actionCorrect () {
    console.log(
      `${Colors.blue(`[${this.moduleName.toUpperCase()}]`)} ${Colors.yellow(PlusMessage.ACTION_REALIZED)}`
    )
  }

  actionIncorrect (err: unknown) {
    console.log(
      `${Colors.blue(
`[${this.moduleName.toUpperCase()}]`)} ${Colors.yellow(PlusMessage.ACTION_NOT_REALIZED)} 
${Colors.blue('[ERROR] ')}${Colors.yellow(`${err}`)}`
    )
  }

  error () {
    console.log(
      `${Colors.blue(`[${this.moduleName.toUpperCase()}]`)} Error al iniciar la conexión`
    )
  }

  saita (data: any) {
    console.info(`${Colors.green(
      '+=====================================================================================+'
    )}                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${Colors.yellow(`        ⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀  
    ⠀⠀⠀⣴⠿⠏⠀⠀⠀⠀⠀⠀⢳⡀⠀  ⢠⠞⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠙⠲⡀⠀
    ⠀⠀⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀⣧⠀ ⢸⠀⠀⠀⠀⠀                                                         ⡇
    ⠀⠀⢸⣯⡭⠁${Colors.green('⠸⣛⣟⠆⡴⣻⡲')}⣿  ⣸⠀⠀        💱💱💱 ${Colors.green(
  'Server'
)} listening on port: ${Colors.green(data)} 💱💱💱        ⡇
    ⠀⠀⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀⣿⠀⣸⢹⠀⠀⠀⠀⠀                                                         ⡇
    ⠀⠀⠙⢿⣯⠄⠀⠀⠀⢀⡀⠀⠀⡿⠀ ⠀⠘⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠞⠀
    ⠀⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀⠀
    ⠀⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀
    ⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀
    ⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀⠀⣄⢸⠀⠀⠀⠀⠀⠀
    ⣿⣿⣧⣀⣿.........⣀⣰⣏⣘⣆⣀⠀⠀ `)}
${Colors.green(
  '+=====================================================================================+'
)}`)
  }
}
