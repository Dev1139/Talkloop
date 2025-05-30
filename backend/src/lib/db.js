import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected : ",mongoose.connection.host);
                
    } catch (error) {
        console.log("Error connecting to MongoDB : ",error);
        process.exit(1); // 1 means failure
        
    }
}
