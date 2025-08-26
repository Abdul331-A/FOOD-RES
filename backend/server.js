import express from 'express';
import cors from 'cors';
import {connectDb} from './config/connectionDb.js'
import path from 'path';
const app=express();
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import userRouter from "./routes/user.js"
import recipeRouter from "./routes/recipe.js"
dotenv.config();

const PORT=process.env.PORT || 3000;
connectDb();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.use(express.static("uploads"))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/",userRouter)
app.use("/recipe",recipeRouter)

// app.use(express.static("uploads"))

app.listen(PORT,(err)=>{
    console.log(`Server is running on port ${PORT}`);
    
})




