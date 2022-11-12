import VConsole from 'vconsole'

const vConsole = new VConsole()

if (process.env.NODE_ENV !== 'development') {
  vConsole.destroy()
}
