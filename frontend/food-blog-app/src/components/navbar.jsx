import React, { useState } from "react";
import "../index.css";
import "../App.css";
import Model from "./Model";
export default function Navbar() {
  const [isOPen, setIsOpen] = useState(false);

  const checkLogin = () => {
    setIsOpen(true);
  };
  
  return (
    <>
      <header>
        <h2>food blog</h2>
        <ul>
          <li>Home</li>
          <li>My recipe</li>
          <li>Favourite</li>
          <li onClick={checkLogin}>Login</li>
        </ul>
      </header>
      {(isOPen) && <Model onClick={()=>setIsOpen(false)} />}
    </>
  );
}
