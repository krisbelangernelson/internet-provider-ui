const common = require('../common')

module.exports = {
  ...common,
  environment: 'local',
  cors: {
    origin: 'http://localhost:8080',
    credentials: true
  }
}
