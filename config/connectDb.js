const mongoose=require("mongoose")

const connectDb=async()=>{
    try{
        await mongoose.connect("mongodb+srv://forshahdra:asdfghjkl@cluster0.uixnf.mongodb.net/batch3")
        console.log("MongoDb connected Successfully!")
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports=connectDb;