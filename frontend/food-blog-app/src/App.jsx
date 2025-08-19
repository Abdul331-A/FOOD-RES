import React from "react";
import Home from "./pages/home";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/Mainnavigation";
import axios from "axios";

const getAllRecipes = async () => {
  let AllRecipes= []
  await axios.get('http://localhost:5000/recipe').then(res=>{
    AllRecipes=res.data
  })
  return AllRecipes

}

const router = createBrowserRouter([
  {
    path: "/", element: <MainNavigation />, children: [
      { path: "/", element: <Home />,loader: getAllRecipes },

    ]
  },
])


export default function App() {
  return (
    <>

      <RouterProvider router={router} />
    </>

  )
}
