
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

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


//login user
export const loginUser = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await User.findOne({ email })

        if (!user){
            return res.status(404).send({message:"user not found or wrong Email"})
        }

        const comapairPass = await bcrypt.compare(password, user.password)
        if (!comapairPass) {
            return res.status(404).send({message:"user not found or wrong password"})    
        }

        res.status(200).json({id:user._id, email: user.email, name: user.name, role: user.role, token: createToken(user._id)  
    })
    } catch (error) {
        res.status(500).send({message:"internal server error"})
    }
}


//create token
const createToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: "7d" })
    
}


///

export const getProfile = async (req, res) => {
    try {
        const user = req.user
        res.status(200).json({
            id: user._id, email: user.email, name: user.name, role: user.role
        })
    } catch (error) {
        res.status(500).send({message:"internal server error"})
    }
}