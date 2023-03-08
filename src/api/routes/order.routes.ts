import { Router } from 'express'
import { create, getUserOrders } from '../../services/order.service'
import isAuth from '../middlewares/isAuth'

const routes = Router()

routes.post('/', isAuth, create)

routes.get('/users/:id', isAuth, getUserOrders)

export default routes
