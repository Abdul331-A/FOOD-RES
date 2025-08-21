const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{
        Types:String,
        required:true,
        unique:true
    },
    password:{
        Types:String,
        required:true,
    }
},{timestamp:true})

module.exports=mongoose.module("user",userSchema)