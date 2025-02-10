const express =require("express");
const { handleSignUp, handleLogin, handleLogOut } = require("../controller/authController");


const router=express.Router();


router.post('/auth/signup',handleSignUp)
router.post('/auth/login',handleLogin)
router.post('/auth/logout',handleLogOut)


module.exports=router