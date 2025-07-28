import express from 'express'
import { authVerify } from '../middlewares/authMiddleware.js';
import { getProfile } from '../controllers/authController.js';


const router = express.Router();

router.get("/profile", authVerify,getProfile)

export default router