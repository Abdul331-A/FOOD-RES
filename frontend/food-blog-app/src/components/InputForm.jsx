import React, { useState } from "react";
// import '../App.css';

import axios  from 'axios';


export default function InputForm({setIsOpen}) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [isSignup,setIsSignup]=useState(false)
    const [error,setError]=useState("")


   const handleOnSubmit = async (e) => {
    // 1. Corrected typo: preventDefault()
    e.preventDefault();

    // Clear any previous errors before making a new request
    setError(null);

    // Use a try...catch block for clean async/await error handling
    try {
        const endPoint = isSignup ? "signUp" : "login";

        // 2. Await the response and store it directly in a variable
        const response = await axios.post(`http://localhost:5000/${endPoint}`, {
            email,
            password,
        });

        // The code below only runs if the await was successful
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // 3. Set state with an explicit value
        setIsOpen(false); // Close the modal on success

    } catch (error) {
        // 4. Improved error handling
        if (error.response && error.response.data && error.response.data.error) {
            // This is likely an error message sent from your API (e.g., "Invalid credentials")
            setError(error.response.data.error);
        } else {
            // This handles other errors like network issues, server down, etc.
            setError("An unexpected error occurred. Please try again.");
        }
        
        // You can also log the full error for debugging purposes
        console.error("Login/Signup failed:", error);
    }
};
  return (
    <>
      <form className="form w-[71%] mx-auto text-center" onSubmit={handleOnSubmit} action="">
        <div className="from-control flex justify-between gap-4 mt-8">
          
          <label htmlFor="email" className="">Email</label>
         
          <input
            type="email"
            id="email"
            className="input"
            required
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="from-control flex justify-between gap-4 mt-4">
          <label htmlFor="password">Password</label>
          
          <input
            type="password"
            id="password"
            className="input"
            required
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="font-black">{(isSignup)?"sign up":"Login"}</button><br />
        {(error!="") && <h6 className="error">{error}</h6>}
        <p onClick={()=>setIsSignup(pre=>!pre)}>{(isSignup)?"already have an account":"Create a new account"}</p>
      </form>
    </>
  );
}