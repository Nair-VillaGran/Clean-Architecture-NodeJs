/* eslint-disable new-cap */
/* eslint-disable no-new */
import { Server } from './server'
import { Console } from './lib/console'
const clg = new Console('Server')
const Srv = new Server()

const serverListen = () => {
  process.stdout.write('\u001b[2J\u001b[0;0H')
  clg.saita(Srv.app.get('port'))
  clg.successWelcome()
}

Srv.app
  .listen(Srv.app.get('port'), serverListen())
