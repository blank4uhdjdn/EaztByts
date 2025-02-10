
const { resolvePath } = require("react-router-dom");
const CmsUser = require('../models/cmsUser')
const{generateTokenAndSetCookie}=require("../utils/generateTolken")
const bcrypt = require("bcryptjs");

const handleSignUp = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword } = req.body;

        if (!fullName || !userName || !password || !confirmPassword) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const user=await CmsUser.findOne({userName})
        if(user){
            return res.status(400).json({error:"user already exists"})
        }

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const newCmsUser= new CmsUser({
            fullName:fullName,
            userName:userName,
            password:hashedPassword
        })

        if(CmsUser){
            await newCmsUser.save();
            res.status(201).json({
                id:newCmsUser._id,
                fullName:fullName,
                userName:userName,
                password:hashedPassword
            })
        }

        else{
            res.status(500).json({error:"invalid user data "})
        }

    } catch (error) {
        console.log(`Error in signup controller: ${error.message}`);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const handleLogin=async(req,res)=>{
    try {
        const{userName,password}=req.body;
        if(!userName||!password){
            return res.status(400).json({error:"All fielda are required"})
        }
        const user=await CmsUser.findOne({userName})
        const isPasswordCorrect=await bcrypt.compare(password,user?.password||"");
        if(!user||!isPasswordCorrect){
            return res.status(400).json({error:"invalid usename or password"})
           }

           generateTokenAndSetCookie(user._id,res)


         res.status(200).json({
            _id:user._id,
            userName:user.userName,
            fullName:user.fullName,
        })

    } catch (error) {
        console.log(`error in login controller ${error.message}`)
        res.status(500).json({error:"internal server error"})
        
    }
}

const handleLogOut=async(req,res)=>{
        try {
          res.cookie("jwt","",{maxAge:0})
          res.status(200).json({message:"logged out successfully"})
        } catch (error) {
          console.log(`error in logout controller ${error.message}`);
          res.status(500).json({ error: "internal server error" });
        }
      
}

module.exports = { handleSignUp,handleLogin, handleLogOut,};
