import express from 'express'
import { config } from 'dotenv';
import cors from 'cors'
import dbConnect from './config/dbconfig.js';
import authRouter from "./routes/authRouter.js";
import employeeRouter from "./routes/employeeRoutes.js";
import attendanceRouter from "./routes/attendanceRoutes.js";
import leaveRouter from './routes/leaveRoutes.js'
import payrollRouter from './routes/payrollRoutes.js'


config()

//server declare
const app = express();

app.use(express.json())
app.use(cors())

//demo route
app.get('/', (req, res) => {
    res.send(' welcome to ems')
})

//routes
app.use('/api/auth', authRouter)
app.use('/api/employees', employeeRouter)
app.use("/api/attendance", attendanceRouter)
app.use("/api/leave", leaveRouter)
app.use("/api/payment",payrollRouter)


//db connect

dbConnect()

// server call

const port = process.env.SERVER_PORT || 3000
app.listen(port, () => {
    console.log('server is running on port 3000')
})
