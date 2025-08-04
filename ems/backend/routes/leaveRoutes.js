import express from 'express'
import { adminVerify, authVerify } from '../middlewares/authMiddleware.js'
import { allLeave, applyLeave, empLeave, permissionLeave } from '../controllers/leaveController.js'

const router = express.Router()

router.post("/apply", authVerify, applyLeave)

router.get("/allLeave",authVerify, adminVerify, allLeave)

router.get("/empLeave", authVerify, empLeave)

router.put("/update/:id",authVerify,adminVerify,permissionLeave)



export default router