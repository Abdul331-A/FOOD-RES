const Recipes=require("../models/recipe");
const { route } = require("../routes/recipe");

const getRecipes =async(req,res)=>{
    const recipes=await Recipes.find();
    return res.json(recipes);
}
const getRecipe =(req,res)=>{
    res.json({message:"helllo"})
}
const addRecipe =async(req,res)=>{
    const {title,ingredients,instruction,time,coverImage}=req.body;
 console.log(req.body);
 
    // return res.json({message:"helllo"})
    if(!title || !ingredients || !instruction)
    {
        res.json({message:"required fields are missing"})
    }
    const newRecipe=await Recipes.create({
        title,ingredients,instruction,time
    })
    return res.json(newRecipe)

}
const editRecipe =(req,res)=>{
    res.json({message:"helllo"})
}
const deleteRecipe =(req,res)=>{
    res.json({message:"helllo"})
}



module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe};