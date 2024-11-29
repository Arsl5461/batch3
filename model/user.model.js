const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    image:{
        type:String
    },
    password:{
        type:String
    },
    phone:{
        type:Number
    },
    status:{
        type:Boolean,
        default:true
    }
},
{timestamps:true}
)
module.exports=mongoose.model("User",userSchema)