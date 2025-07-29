import express from 'express'
import {  loginUser, registerUser } from '../controllers/authController.js';
import { authVerify } from '../middlewares/authMiddleware.js';


const router = express.Router();

router.post('/register', registerUser)
router.post('/login',loginUser)
//
router.get("/profile", authVerify, (req, res) => {
    res.json({ id: req.user._id, name: req.user.name, email: req.user.email, role: req.user.role})
})

export default router;