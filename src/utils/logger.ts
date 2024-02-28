const logger = {
  error: (message: object | string, caller?: string) => {
    console.error(message, caller) // eslint-disable-line no-console
  },
  info: (message: object | string, caller?: string) => {
    console.log(message, caller) // eslint-disable-line no-console
  },
  warning: (message: object | string, caller?: string) => {
    console.warn(message, caller) // eslint-disable-line no-console
  }
}

export default logger
