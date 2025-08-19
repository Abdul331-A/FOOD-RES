import React, { use } from "react";
import { useLoaderData } from "react-router-dom";

export default function RecipeItems() {
const AllRecipes=useLoaderData()
console.log(AllRecipes);

    return(
        <div></div>
    )
}
