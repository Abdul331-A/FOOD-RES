import React from "react";
import fd from "../assets/foodRecipe.png";
import RecipeItems from "../components/RecipeItems";
import "../index.css"
import "../App.css"


export default function Home() {
    return (
        <>
           
            <section className='home'>
                <div className="left">
                    <h1 className="">food recipe</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veritatis suscipit. Minima aperiam vel distinctio vero, sapiente id! Suscipit error dignissimos ab sequi.</h5>
                    <button>share your recipe</button>
                </div>
                <div className="rigth ">           
                   <img src={fd} alt="" width="420px" height="300px" />
                </div>
            </section>
            <div className='bg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" d="M0,224L48,197.3C96,171,192,117,288,112C384,107,480,149,576,176C672,203,768,213,864,186.7C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
          
          <div className="recipe">
            <RecipeItems />
          </div>

        </>
    )
}