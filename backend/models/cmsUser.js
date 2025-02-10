const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required: true,
        minlength:6,
    },
   
},{timestamps:true})

const csmUser= mongoose.model("CmsUser",userSchema)

module.exports=csmUser