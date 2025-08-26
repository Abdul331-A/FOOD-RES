import mongoose from "mongoose";



 export const connectDb=async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Connected to MongoDB successfully"));
    // .catch((err) => console.log("❌ Connection Error:", err));
    
}

