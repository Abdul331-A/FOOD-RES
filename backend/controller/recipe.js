
import multer from 'multer';
import Recipes from './../models/recipe.js';
import path from 'path';





const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const fileName =
      Date.now() + "-" + file.fieldname + path.extname(file.originalname);
    cb(null, fileName);
  },
});

export const upload = multer({ storage: storage });

export const getRecipes = async (req, res) => {
  const recipes = await Recipes.find();
  return res.json(recipes);
};
export const getRecipe = async (req, res) => {
  const recipe = await Recipes.findById(req.params.id);
  res.json(recipe);
};
export const addRecipe = async (req, res) => {
    console.log("Body (text fields):", req.body);
    console.log("File (upload data):", req.file);
    const { title, ingredients, instruction, time } = req.body;
  console.log(req.file, "uppp");

   if (!req.file) {
        return res.status(400).json({ message: "Recipe image is required." });
    }
    if (!title || !ingredients || !instruction || !time) {
        return res.status(400).json({ message: "Required text fields are missing." });
    }
    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  console.log({fileUrl});
try {
        
        const newRecipe = await Recipes.create({
            title,
            ingredients,
            instruction,
            time,
            coverImage: fileUrl // Use the URL we created
        });

        return res.status(201).json(newRecipe); 

    } catch (error) {
        console.error("Error creating recipe:", error);
        return res.status(500).json({ message: "Server error while creating recipe." });
    }
};
export const editRecipe = async (req, res) => {
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

export const deleteRecipe = (req, res) => {
  res.json({ message: "helllo" });
};

