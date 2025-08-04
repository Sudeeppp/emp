import express from 'express'
import { adminVerify, authVerify } from '../middlewares/authMiddleware.js'
import { createEmployee, deleteEmployee, getAllEmployee, getEmployeeById, updateEmployee } from '../controllers/employeeController.js'

const router = express.Router()


router.post("/create", authVerify, adminVerify, createEmployee)

router.get("/all", authVerify, getAllEmployee)
router.get("/get/:id", authVerify, getEmployeeById)
router.put("/update/:id", authVerify, adminVerify,updateEmployee)
router.delete("/delete/:id",authVerify,adminVerify,deleteEmployee)


export default router;