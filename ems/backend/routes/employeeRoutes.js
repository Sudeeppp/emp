import express from 'express'
import { authVerify } from '../middlewares/authMiddleware.js'
import { createEmployee, deleteEmployee, getAllEmployee, getEmployeeById, updateEmployee } from '../controllers/employeeController.js'

const router = express.Router()

router.post("/create", authVerify, createEmployee)
router.get("/all", authVerify, getAllEmployee)
router.get("/get/:id", authVerify, getEmployeeById)
router.put("/update/:id", authVerify, updateEmployee)
router.delete("/delete/:id",authVerify,deleteEmployee)


export default router;