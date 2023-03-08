import app from './loaders/express'
import config from './config'

app.listen(config.port, () => {
  console.log('server start')
})
