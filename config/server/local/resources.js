const common = require('../common')
const { environment } = require('./server-config')

module.exports = {
  ...common,
  environment,
  cors: {
    origin: 'http://localhost:8080',
    credentials: true
  }
}
