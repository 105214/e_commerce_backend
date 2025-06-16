import express from "express";
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mangodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";

const app =express()
const port = process.env.PORT || 3000
connectDB()
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors())


//api endpoint
app.use('/api/user',userRouter)
app.listen(port,()=>{
    console.log(`server running on ${port}`);
    
})