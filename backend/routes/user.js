const express= require('express');
const router=express.Router();
const {userLogin,userSignup,getUser}=require("../controller/user")


router.post("/signUp",userSignup)
router.post("/Login",userLogin)
router.get("/user/:id",getUser)


module.exports=router
