import Announcement from "../models/Announcement"


export const createAnnouncement = async (req, res) => {
    try {
        const { title, message } = req.body
        const announcement = new Announcement({ title, message, postedBy: req.user._id })
        const saved = await announcement.save();
        res.status(200).json(saved)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}