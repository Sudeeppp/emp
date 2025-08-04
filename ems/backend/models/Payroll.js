import mongoose from "mongoose";

const payrollSchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
    salary: { type: Number, required: true },
    bonus: { type: Number, required: true },
    deductions: { type: Number, required: true },
    netSalary: { type: Number},
    payDate: { type: Date, default: Date.now },
    
})

// calculation

payrollSchema.pre("save",function(next){
    this.netSalary = this.salary + this.bonus - this.deductions
    next()
})

const Payroll = mongoose.model("Payroll",payrollSchema)

export default Payroll

