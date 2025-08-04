import Employee from "../models/Employee.js"


//create employee

// export const createEmployee = async (req, res) => {
//     const { name, email, position, salary, joiningDate, department } = req.body

//     try {
//         const employee = await Employee.create({ name, email, position, salary, joiningDate, department })
//         res.status(201).json(employee)
//     } catch (error) {
//         res.status(500).send({ message: "internal server error" })
//     }
// }

//create employee

export const createEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body)
        let saveEmp = await newEmployee.save()
        res.status(200).json(saveEmp)
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error })
    }
}

//get all employee
export const getAllEmployee = async (req, res) => {
    try {
        const employee = await Employee.find();
        res.status(200).json(employee)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// get employee by id

export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        if (!employee) {
            return res.status(404).send({ message: "Employee not Found" })
        } else {
            res.status(200).json(employee)
        }
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })    
    }
}

//update 
export const updateEmployee = async (req, res) => {

    // try {
    //     const { id } = req.query
    //     const employee = await Employee.updateOne({ _id: id }, { ...req.body })
    //     if (!employee) {
    //         return res.status(404).send({ message: "Employee not Found" })
    //     }
    //     else {
    //         res.status(200).json(employee)
    //         // res.status(200).send({ message: "employee updated successfully" }) 
    //     } 
    // } catch (error) {
    //     res.status(500).send({ message: "internal server error", error: error.message })
    // }
    
    
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
        
        if (!employee) {
            return res.status(404).send({ message: "Employee not Found" })
        } else {
            res.status(200).json(employee)
        }
    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}

//delete

export const deleteEmployee = async (req, res) => {
    try {
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
        if (!deleteEmployee) {
            return res.status(404).send({ message: "Employee not Found" })
        } else {
            res.status(200).send({ message: "employee deleted successfully" })
        }

    } catch (error) {
        res.status(500).send({ message: "internal server error", error: error.message })
    }
}