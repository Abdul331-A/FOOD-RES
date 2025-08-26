
import { mongoose } from 'mongoose';

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: [{
        type: String,
        required: true
    }],
    instruction: [{
        type: String,
        required: true
    }],
    time: {
        type: String,
    },
    coverImage: {
        type: String
    },
}, { timestamps: true });

const Recipes = mongoose.model("recipes", recipeSchema)

export default Recipes
