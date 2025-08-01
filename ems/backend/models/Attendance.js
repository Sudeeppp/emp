import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true   
    },
    date: {
        type: Date,
        default:Date.now
        // required:true
    },
    status: {
        type: String,
        enum: ["Present", "Absent", "Leave"],
        default:"Present"
    }

})

const Attendance = mongoose.model("Attendance", attendanceSchema)

export default Attendance