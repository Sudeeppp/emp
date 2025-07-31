import express from "express"
import { authVerify } from "../middlewares/authMiddleware.js";
import { allAttandance, alttandanceById, checkAttendance, deleteAttendance, updateAttendance } from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/check", authVerify, checkAttendance)
router.get("/all", authVerify, allAttandance)
router.get("/:id", authVerify, alttandanceById)
router.put("/update/:id", updateAttendance)
router.delete("/del/:id",deleteAttendance)

export default router