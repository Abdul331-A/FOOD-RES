const recipe = require("../models/recipe");
const Recipes=require("../models/recipe");
const { route } = require("../routes/recipe");

const getRecipes =async(req,res)=>{
    const recipes=await Recipes.find();
    return res.json(recipes);
}
const getRecipe = async (req,res)=>{
    const recipe=await Recipes.findById(req.params.id)
    res.json(recipe);
}
const addRecipe =async(req,res)=>{
    const {title,ingredients,instruction,time,coverImage}=req.body;
//  console.log(req.body);
 
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
const editRecipe = async (req, res) => {
    const { title, ingredients, instruction, time, coverImage } = req.body;

    try {
        // Make sure the model is named Recipes, not recipe
        const recipe = await Recipes.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        // Correct usage: first param should be a filter object, not just an ID
        const updatedRecipe = await Recipes.findOneAndUpdate(
            { _id: req.params.id },
            { title, ingredients, instruction, time, coverImage },
            { new: true }
        );

        res.json(updatedRecipe);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const deleteRecipe =(req,res)=>{
    res.json({message:"helllo"})
    
}



module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe};