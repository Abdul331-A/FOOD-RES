import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddFoodRecipe=()=>{
    const [recipeData,setRecipeData]=useState({})
    const navigate=useNavigate()
    // const onHandleChange=(e)=>{
    //     console.log(e.target.files[0]);
        
    //     let val=(e.target.name==="Ingredients")?e.target.value.split(","):(e.target.name==="file")?e.target.files[0]:e.target.value
    //     setRecipeData(pre=>({...pre,[e.target.name]:val}))
    // }
    // const onHandleSubmit=async(e)=>{
    //         e.preventDefault()
    //         console.log(recipeData);
    //         const formData = new FormData();

    // formData.append('title', recipeData.title);
    // formData.append('time', recipeData.time);
    // formData.append('instructions', recipeData.instructions);
    // formData.append('file', recipeData.file); 

    // if (recipeData.ingredients && Array.isArray(recipeData.ingredients)) {
    //     recipeData.ingredients.forEach(ingredient => {
    //         formData.append('ingredients', ingredient.trim());
    //     });
    // }

    //         await axios.post("http://localhost:5000/recipe",formData,{
    //             headers:{
    //                 'Content-Type':'multipart/form-data'
    //             }
    //         })
    //         // .then(()=>navigate("/"))

    // }


    const onHandleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {

        setRecipeData(prev => ({ ...prev, [name]: files[0] }));
    } else if (name === "ingredients") {
        setRecipeData(prev => ({ ...prev, [name]: value.split(',') }));
    } else {
        setRecipeData(prev => ({ ...prev, [name]: value }));
    }
};

const onHandleSubmit = async (e) => {
    e.preventDefault();

    console.log("Final recipe data before creating FormData:", recipeData); // Good for debugging

    const formData = new FormData();
    formData.append('title', recipeData.title ?? '');
    formData.append('time', recipeData.time ?? '');
    formData.append('instruction', recipeData.instructions ?? '');

    if (recipeData.file) {
        formData.append('file', recipeData.file);
    }

    if (recipeData.ingredients && Array.isArray(recipeData.ingredients)) {
        recipeData.ingredients.forEach(ingredient => {
            // Only append non-empty ingredients
            if (ingredient.trim() !== '') {
                formData.append('ingredients', ingredient.trim());
            }
        });
    }

    try {
        await axios.post("http://localhost:5000/recipe", formData); // <-- formData is the second argument
        navigate("/");
    } catch (error) {
        console.error("Failed to add recipe:", error);
    }
};

    return(
        <>
         <div className='container'>
                <form className='form' onSubmit={onHandleSubmit}>
                    <div className='form-control'>
                        <label>Title</label>
                        <input type="text" className='input' name="title" onChange={onHandleChange}></input>
                    </div>

                    <div className='form-control'>
                        <label>Time</label>
                        <input type="text" className='input' name="time" onChange={onHandleChange}></input>
                    </div>
                    <div className='form-control'>
                        <label>Ingredients</label>
                        <textarea type="text" className='input-textarea' name="ingredients" rows="5" onChange={onHandleChange}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Instructions</label>
                        <textarea type="text" className='input-textarea' name="instructions" rows="5" onChange={onHandleChange}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Recipe Image</label>
                        <input type="file" className='input' name="file" onChange={onHandleChange}></input>
                    </div>
                    <button type="submit">Add Recipe</button>
                </form>
            </div>
        </>
    )
}