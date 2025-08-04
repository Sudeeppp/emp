import express from 'express'
import { authVerify } from '../middlewares/authMiddleware.js'
import { allPayment, createPayment, deletePayment, paymentById, updatePayment } from '../controllers/payrollController.js'

const router = express.Router()

router.post("/create", authVerify, createPayment)
router.get("/all", authVerify, allPayment)
router.get("/id/:id", authVerify, paymentById)
router.put("/update/:id", authVerify, updatePayment)
router.delete("/del/:id",authVerify,deletePayment)


export default router