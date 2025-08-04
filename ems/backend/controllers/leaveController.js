import Leave from "../models/Leave.js"


export const applyLeave = async(req,res)=> {
    try {
        const { startDate, endDate, reason, type } = req.body
        const leave = await Leave.create({
            employee: req.user._id,
            startDate,
            endDate,
            reason,
            type
        })
        res.status(200).json(leave)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
    
}


export const allLeave =async (req ,res) => {
    try {
        const leave = await Leave.find().populate("employee","name email").sort({ createdAt: 1 })
        res.status(200).json(leave)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}




// emp see the leave
export const empLeave =async (req,res) => {
    try {
        const leave = await Leave.find({ employee: req.user._id })
        res.status(200).json(leave)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}

//permission

export const  permissionLeave = async (req,res) => {
    try {
        const { status } = req.body
        const leave = await Leave.findByIdAndUpdate(req.params.id, { status }, { new: true })
        res.status(200).json(leave)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}
