import {Router} from 'express'
import { sendMessage, getMessages } from '../controllers/message.controller.js'
import { AuthMiddleware } from '../middleware/AuthMiddleware.js'


const router = Router()
router.post('/send/:id', AuthMiddleware, sendMessage)
router.get('/:id', AuthMiddleware, getMessages)


export default router