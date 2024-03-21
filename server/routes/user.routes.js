import {Router} from 'express'
import { AuthMiddleware } from '../middleware/AuthMiddleware.js'
import { getUsersForSidebar } from '../controllers/user.controller.js'

const router = Router()

router.get('/', AuthMiddleware, getUsersForSidebar)

export default router