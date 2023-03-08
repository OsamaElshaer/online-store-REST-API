import { Router } from 'express'
import isAuth from '../middlewares/isAuth'
import { create, show, index } from '../../services/user.service'
const router = Router()

router.post('/register', create)

router.get('/:id', isAuth, show)

router.get('/', isAuth, index)

export default router
