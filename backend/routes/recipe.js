import express from 'express';
import { addRecipe, deleteRecipe, editRecipe, getRecipe, getRecipes, upload } from './../controller/recipe.js';

const router=express.Router();




router.get("/",getRecipes);
router.get("/:id",getRecipe); 
router.post("/",upload.single('file'),addRecipe);
router.put("/:id",editRecipe);
router.delete("/:id",deleteRecipe);



export default router;