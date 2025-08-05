import Announcement from "../models/Announcement.js "


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


export const allAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.find().populate("postedBy", "name email").sort({ createdAt: 1 })
        res.status(200).json(announcement)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}


export const updateAnnouncement = async (req, res) => {
    try {
        let update = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(update)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}

export const deleteAnnouncement = async (req, res) => {
    try {
        let deleteAnnouncement = await Announcement.findByIdAndDelete(req.params.id)
        // res.status(200).json(deleteAnnouncement)
        res.status(200).send({ message: "Announcement deleted successfully" })
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}