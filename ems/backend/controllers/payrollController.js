import Payroll from "../models/Payroll.js"


export const createPayment = async (req, res) => {
    try {
        const payment = new Payroll(req.body)
        let savePayment = await payment.save();
        res.status(200).json(savePayment)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}


export const allPayment = async (req, res) => {
    try {
        const payment = await Payroll.find().populate("employee","name email").sort({ createdAt: 1 })
        res.status(200).json(payment)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}

export const paymentById = async (req, res) => {
    try {
        const payment = await Payroll.findById(req.params.id).populate("employee","name email")
        if (!payment) {
            return res.status(404).send({ message: "Payment not Found" })
        } else {
            res.status(200).json(payment)
        }
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}


// export const updatePayment = async (req, res) => {
//     try {
//         let update = await Payroll.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         res.status(200).json(update)
//     } catch (error) {
//         res.status(500).send({ message: "internal server error", error: error.message })
//     }
// }

export const updatePayment = async (req, res) => {
    try {
        const payroll = await Payroll.findById(req.params.id);
        if (!payroll) return res.status(404).json({ error: "Payroll not found" });

        // Update 
        if (req.body.salary !== undefined) payroll.salary = req.body.salary;
        if (req.body.bonus !== undefined) payroll.bonus = req.body.bonus;
        if (req.body.deductions !== undefined) payroll.deductions = req.body.deductions;

        // Recalculate 
        payroll.netPay = payroll.basicSalary + payroll.bonus - payroll.deductions;

        const updatedPayroll = await payroll.save();
        res.json(updatedPayroll);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    
}


export const deletePayment = async (req, res) => {
    try {
        const deletePayment = await Payroll.findByIdAndDelete(req.params.id)
        if (!deletePayment) {
            return res.status(404).send({ message: "Payment not Found" })
        } else {
            res.status(200).send({ message: "Payment deleted successfully" })
        }
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}   