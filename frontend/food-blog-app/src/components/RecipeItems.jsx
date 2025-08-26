import React, { use } from "react";
import { useLoaderData } from "react-router-dom";
import foodImg from "../assets/foodRecipe.png";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
export default function RecipeItems() {
  const allRecipes = useLoaderData();
  console.log(allRecipes);

  return (
    <>
      <div className="card-container w-4/5 mx-auto grid gap-10 grid-cols-[repeat(auto-fit,13rem)] cursor-pointer">
        {allRecipes?.map((item, index) => {
          return (
            <div key={index} className="card shadow-[0_1px_2px_rgba(0,0,0,0.5)] text-center rounded-[5px]">
              <img src={`${item.coverImage}`} width="120px" height="100px"/>
              <div className="card-body bg-[#99d4bc] p-4">
                <div className="title mb-[5px] text-[15px] font-medium">{item.title}</div>
                <div className="icons flex justify-between items-center">
                    <div className="timer"><BsFillStopwatchFill />30mints</div>
                    <FaHeart />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
