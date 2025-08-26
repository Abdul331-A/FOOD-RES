import express from 'express';
import { getUser, userLogin, userSignup } from '../controller/user.js'
const router=express.Router();



router.post("/signUp",userSignup)
router.post("/Login",userLogin)
router.get("/user/:id",getUser)


export default router
