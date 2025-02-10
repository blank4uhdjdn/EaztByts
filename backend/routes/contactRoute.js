const express =require("express");
const handleContact = require("../controller/contactController");



const router=express.Router();


router.post('/contact/send-message',handleContact)



module.exports=router