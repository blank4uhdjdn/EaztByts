// const path=require('path')

// const express =require("express");
// const { connectToMongodb } = require("../db/connetToMongoDb");
// const dotenv=require("dotenv")
// const CmsUser=require("./models/cmsUser")
// const BlogPost=require('./models/BlogPost')


// const authroutes=require('./routes/authroutes')
// const contactRoute=require('./routes/contactRoute')
// const cmsRoutes=require('./routes/cmsRoutes')



//  const app =express();
//  dotenv.config()

// // const __dirname = path.resolve();


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/api',authroutes)
// app.use('/api',contactRoute)
// app.use('/api',cmsRoutes)

// app.use(express.static(path.join(__dirname,"../../frontend/dist")))


// app.get("*",(req,res)=>{
//    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))

// })
 



//  const PORT=process.env.PORT||8000;

//  app.listen(PORT , ()=>{
//     connectToMongodb();
//     console.log(`the server is listening at ${PORT}`)
//  })
 
const path = require("path");
const express = require("express");
const { connectToMongodb } = require("../db/connetToMongoDb");
const dotenv = require("dotenv");

const authroutes = require("./routes/authroutes");
const contactRoute = require("./routes/contactRoute");
const cmsRoutes = require("./routes/cmsRoutes");

const app = express();
dotenv.config();
// const __dirname = path.resolve();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authroutes);
app.use("/api", contactRoute);
app.use("/api", cmsRoutes);

// ✅ Correct path to serve frontend (since frontend is outside backend)
app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))

})


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectToMongodb();
  console.log(`Server is running on port ${PORT}`);
});
