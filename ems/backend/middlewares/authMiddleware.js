import jwt from "jsonwebtoken"
import User from "../models/User.js";

// export const authVerify = async (req, res, next) => {
//     const { token } = req.body

//     if (!token) {
//         return res.status(401).send({ message: "unauthorized" })
//     }

//     next()

// }


// export const authVerify = async (req, res, next) => {
//     const authHeader = req.headers.authorization
//     if (!authHeader) {
//         return res.status(401).send({ message: "unauthorized" })
//     }
//     const token = authHeader.split(" ")[1]
//     req.token = token
//     next()


// }


// export  const authVerify = async (req, res, next) => {
//     const authHeader = req.headers.authorization
//    if(authHeader && authHeader.startsWith("Bearer ")){
//     const token = authHeader.split(" ")[1]
//     req.token = token
//     next()
//    }else{
//     return res.status(401).send({ message: "unauthorized" })
//     }

// }

// export const authVerify = async (req, res, next) => {
//     const authHeader = req.headers.authorization
//    if(authHeader && authHeader.startsWith("Bearer ")){
//        let token = authHeader.split(" ")[1]
//        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//            if (err) {
//                return res.status(401).send({ message: "unauthorized" })
//            }
//            req.user = user
//            next()

//        })

//    }else{
//        return res.status(401).send({ message: "unauthorized" })

//     }

// }


// export const authVerify = async (req, res, next) => {
//     const authHeader = req.headers.authorization
//     if (authHeader && authHeader.startsWith("Bearer ")) {
//         let token = authHeader.split(" ")[1]

//         try {
//             const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

//             req.user = verifyToken
//             next()

//         } catch (error) {
//             return res.status(401).send({ message: "unauthorized" })
//         }

//     } else {
//         return res.status(401).send({ message: "unauthorized" })
//     }


// }


export const authVerify = async (req, res, next) => {
    const authHeader = req.headers.authorization
    // console.log(authHeader)
    if (authHeader && authHeader.startsWith("Bearer")) {
        let token = authHeader.split(" ")[1]

        try {
            const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
            let user = await User.findById(verifyToken.id).select("-password")

            req.user = user
            next()

        } catch (error) {
            return res.status(401).send({ message: "token is not valid" })
        }

    } else {
        return res.status(401).send({ message: "unauthorized" })
    }

}