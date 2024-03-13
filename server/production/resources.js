const common = require('../common')
const { environment } = require('./server-config')

module.exports = {
  ...common,
  environment,
  internetApi: {
    baseUrl: 'https://internet-services-api.vercel.app/api/v1'
  },
  customersApi: {
    baseUrl: 'https://internet-customers-api.vercel.app/api/v1'
  },
  ordersApi: {
    baseUrl: 'https://internet-orders-api.vercel.app/api/v1'
  }
}
