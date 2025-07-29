import express from 'express'
import { authVerify } from '../middlewares/authMiddleware.js'
import { createEmployee } from '../controllers/employeeController.js'

const router = express.Router()

router.post("/",authVerify,createEmployee)


export default router;