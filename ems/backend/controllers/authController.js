import User from "../models/User.js"
import bcrypt from "bcryptjs"

// for register user
export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body

    //user is exist or not
    try {
        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(200).send({message:"user already exist"})
        }

        //pasword 
        const hashPass = await bcrypt.hash(password, 10)
        
        //create user
        const user = await User.create({ name, email, password: hashPass, role })
        
        res.status(201).json({
            id: user._id, email: user.email, name: user.name, role: user.role, token: createToken(user._id)
        
    })
        
    } catch (error) {
       res.status(500).send({message:"internal server error"}) 
    }
}

