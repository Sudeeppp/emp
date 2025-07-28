import mongoose from "mongoose";
import { config } from "dotenv";
config()

const dbUrl = process.env.MONGO_URL || "mongodb://localhost:27017/EMS"

const dbConnect = async () => {
    try {
        await mongoose.connect(dbUrl)
        console.log("db connected");
        
    } catch (error) {
        console.log("db connections error ",error.message);
        
    }
}

export default dbConnect;