import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true }, salary: { type: Number, required: true },
    phone: { type: Number, required: true },
address: { type: String},
joiningDate: { type: Date, default: Date.now }, department: { type: String }
})

const Employee = mongoose.model("Employee", employeeSchema)

export default Employee;