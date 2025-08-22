const express= require('express');
const router=express.Router();
const {userLogin,userSignup,getUser}=require("../controller/user")


router.post("/signup",userSignup)
router.post("/signin",userLogin)
router.get("/user/:id",getUser)


module.exports=router