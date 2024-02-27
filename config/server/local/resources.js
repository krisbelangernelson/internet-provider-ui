const common = require('../common')
const { environment } = require('./server-config')

module.exports = {
  ...common,
  environment,
  cors: {
    origin: 'http://localhost:8080',
    credentials: true
  },
  internetApi: {
    baseUrl: 'http://localhost:3000/api/v1'
  },
  customersApi: {
    baseUrl: 'http://localhost:3001/api/v1'
  },
  ordersApi: {
    baseUrl: 'http://localhost:3002/api/v1'
  }
}
