import express, { Application } from 'express'
import routes from '../api/index'

import helmet from 'helmet'
import morgan from 'morgan'
import globalHandlerError from '../api/middlewares/errorHandler'
const app: Application = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(helmet())

app.use('/api', routes)
app.use(globalHandlerError)

export default app
