import userRoutes from './routes/user.routes'
import productsRoutes from './routes/product.routes'
import ordersRoutes from './routes/order.routes'
import { Router } from 'express'
import isAuth from './middlewares/isAuth'
const router = Router()

router.use('/users', userRoutes)
router.use('/products', productsRoutes)
router.use('/orders', isAuth, ordersRoutes)
export default router
