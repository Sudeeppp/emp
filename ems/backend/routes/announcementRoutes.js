import express from 'express'
import { allAnnouncement, createAnnouncement, deleteAnnouncement, updateAnnouncement } from '../controllers/announcementController.js'
import { authVerify } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post("/create", authVerify, createAnnouncement)
router.get("/all", authVerify, allAnnouncement)
router.put("/update/:id", authVerify, updateAnnouncement)
router.delete("/del/:id", authVerify, deleteAnnouncement)


export default router