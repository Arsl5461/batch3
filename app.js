const express=require("express")
const app=express();
const dotenv=require("dotenv").config()
const PORT=process.env.PORT || 8083;
const connectDb=require("./config/connectDb")
const indexRoute=require("./route/index")
const cors=require("cors")
const path=require("path")

connectDb();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json())
app.use(cors())
app.use("/api",indexRoute)



app.listen(PORT,()=>{
    console.log(`PORT is running on ${PORT}`)
})