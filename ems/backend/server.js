import express from 'express'
import { config } from 'dotenv';
import cors from 'cors'
import dbConnect from './config/dbconfig.js';
import authRouter from "./routes/authRouter.js";

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
app.use('/api/auth',authRouter)


//db connect

dbConnect()

// server call

const port = process.env.SERVER_PORT || 3000
app.listen(port, () => {
    console.log('server is running on port 3000')
})
