const express =require("express");
const { handleCreatePost } = require("../controller/cmsController");




const router=express.Router();


router.post('/cms-update',handleCreatePost)



module.exports=router