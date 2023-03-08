import { Router } from 'express'
import {
  create,
  createOrder,
  index,
  show,
} from '../../services/product.service'
import isAuth from '../middlewares/isAuth'

const router = Router()

router.post('/', isAuth, create)

router.get('/', index)

router.get('/:id', show)

// create order
router.post('/:pordId/order', isAuth, createOrder)
export default router
