process.env.NODE_ENV = 'development'
process.env.APP_ENV = 'local'

require('dotenv-override').config({ override: true })
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const pinoHttp = require('pino-http')
const serverConfig = require('./server-config')
const webpackConfig = require('../../webpack/webpack.local')
const { cors: corsConfig } = require('./resources')
const cors = require('cors')

const server = express()
const compiler = webpack(webpackConfig)

const { dist, environment, port } = serverConfig

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
})

const hotMiddleware = webpackHotMiddleware(compiler)
const staticMiddleware = express.static(dist)

const pino = pinoHttp()

server.use(cors(corsConfig))
server.use(pino)
server.use(devMiddleware)
server.use(hotMiddleware)
server.use(staticMiddleware)

server.listen(port, () => {
  pino.logger.info(`${environment} env running in ${process.env.NODE_ENV} mode, listening on port ${port}`)
})
