import React, { useEffect, useState } from "react";
import "../index.css";
import "../App.css";
import Model from "./Model";
import InputForm from "./InputForm";
import { NavLink } from "react-router-dom";





export default function Navbar() {
  const [isOPen, setIsOpen] = useState(false);
 let token=localStorage.getItem("token")

 const [isLogin, setIsLogin] = useState(token?false:true);

 useEffect(()=>{
    setIsLogin(token?false:true)
 },)

  const checkLogin = () => {
    if(token){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setIsLogin(true)
    }
    else{

      setIsOpen(true);
    }

  };
  
  return (
    <>
      <header>
        <h2>food blog</h2>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={!isLogin?"/myRecipe":"/"}>My recipe</NavLink></li>
          <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={!isLogin?"/favRecpie":"/"}>Favourite</NavLink></li>
          <li onClick={checkLogin}><p className="login"></p>{(isLogin)?"Login":"logout"}</li>
        </ul>
      </header>
      {(isOPen) && <Model onClick={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Model>}
    </>
  );
}
