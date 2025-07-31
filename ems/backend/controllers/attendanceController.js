import Attendance from "../models/Attendance.js";


export const checkAttendance = async (req, res) => {
    try {
        const { employee, date, status } = req.body;

        const attendance = await Attendance.create({ employee, date, status })
        res.status(200).json(attendance)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}

//all attendance
export const allAttandance = async (req, res) => {
    try {
        let record = await Attendance.find().populate("employee","name email")
        res.status(200).json(record)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}

//id

// export const alttandanceById = async (req, res) => {
//     try {
//         const attendance = await Attendance.findById({ employee: req.params.id })
//         if (!attendance) {
//             return res.status(404).send({ message: "Attendance not Found" })
//         } else {
//             res.status(200).json(attendance)
//         }
        
//     } catch (error) {
//         res.status(500).send({ message: "internal server error", error: error.message })
//     }
// }

export const alttandanceById = async (req, res) => {
    try {
        const attendance = await Attendance.find({ employee: req.params.id }).populate("employee","name email")
        if (!attendance) {
            return res.status(404).send({ message: "Attendance not Found" })
        } else {
            res.status(200).json(attendance)
        }
        
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}

//update
export const updateAttendance = async (req, res) => {
    try {
        let update = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(update)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}

//Delete
export const deleteAttendance = async (req, res) => {
    try {
        const deleted =await Attendance.findByIdAndDelete(req.params.id)
        res.status(200).json(deleted)

    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}