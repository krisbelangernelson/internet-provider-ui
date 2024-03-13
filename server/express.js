process.env.NODE_ENV = 'production'
process.env.APP_ENV = 'production'

require('dotenv-override').config({ override: true })
const express = require('express')
const pinoHttp = require('pino-http')
const serverConfig = require('./production/server-config')
// const { paths } = require('../webpack/parts/webpack.utils')
// const { corsConfig } = require('./production/resources')
// const webpackConfig = require('../webpack/webpack.production')
const cors = require('cors')
const path = require('path')

const { dist, environment, port } = serverConfig

const DIST = path.resolve(__dirname, '../build')
const server = express()
const pino = pinoHttp({
  autoLogging: {
    ignore: (req) => req.url === '/version'
  }
})

server.disable('x-powered-by')
server.get('/version', async (req, res) => res.send('Version: 1'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(pino)
server.use(cors())

server.use(express.static(DIST))
server.get('*', async (req, res) => res.sendFile(path.join(DIST, '/index.html')))

server.use((err, req, res, next) => {
  console.error(`[FATAL] ${JSON.stringify(err, false, null)}`)
  next(err)
})

// ctrl+c from user
process.on('SIGINT', () => {
  console.log('SIGINT shutting down.')
  process.exit(128)
})

process.on('SIGTERM', () => {
  console.log('SIGTERM shutting down')
  process.exit(0)
})

server.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})

module.exports = server
