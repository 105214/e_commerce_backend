import mongoose from "mongoose";


const connectDB = async () =>{

mongoose.connection.on('connected',()=>{
    console.log("DB connected")
})

await mongoose.connect(`${process.env.MANGODB_URL}/e_commerce2`)
}


export default connectDB