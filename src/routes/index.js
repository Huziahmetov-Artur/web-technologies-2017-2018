import express from 'express'
import { controllers } from '../controllers/controllers'

const router = express.Router()

router.get('/', controllers.all)
router.get('/search', controllers.search)
router.get('/sort', controllers.sort)
router.get('/page', controllers.page)
router.get('/movies/:id', controllers.id)

export default router
