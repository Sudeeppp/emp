import express from 'express'
import { authVerify } from '../middlewares/authMiddleware.js'
import { createEmployee, getAllEmployee } from '../controllers/employeeController.js'

const router = express.Router()

router.post("/", authVerify, createEmployee)
router.get("/",authVerify,getAllEmployee)


export default router;