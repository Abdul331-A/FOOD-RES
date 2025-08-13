const mongoose = require("mongoose");

const recipeSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    instruction:{
        type:String,
        required:true
    },
    time:{
        type:String,
    },
    coverImage:{
        type:String
    },
},{timestamps:true});

module.exports=mongoose.model("recipes",recipeSchema)
