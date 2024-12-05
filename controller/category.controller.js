const Category=require("../model/category.model")


exports.store=async(req,res)=>{
    try{
        const category=await Category.create(req.body)
        return res.json({status:200,success:true,message:"Category Created Successfully",category})
    }
    catch(err){
        console.log(err) 
    }
}
exports.index=async(req,res)=>{
    try{
        const categories=await Category.find()
        return res.json({status:200,success:true,message:"Categorys Fetched Successfully",categories})
    }
    catch(err){
        console.log(err) 
    }
}
exports.get=async(req,res)=>{
    try{
        const {id}=req.params;
        const category=await Category.findOne({_id:id})
        if(!category){
            return res.json({status:404,success:false,message:"Category not found"})
        }
        return res.json({status:200,success:true,message:"Category Created Successfully",category})
    }
    catch(err){
        console.log(err) 
    }
}
exports.destroy=async(req,res)=>{
    try{
        const {id}=req.params;
        const category=await Category.findOneAndDelete({_id:id})
        if(!category){
            return res.json({status:404,success:false,message:"Category not found"})
        }
        return res.json({status:200,success:true,message:"Category Deleted Successfully"})
    }
    catch(err){
        console.log(err) 
    }
}
exports.update=async(req,res)=>{
    try{
        const {id}=req.params;
        const category=await Category.findOneAndUpdate({_id:id},req.body,{new:true})
        if(!category){
            return res.json({status:404,success:false,message:"Category not found"})
        }
        return res.json({status:200,success:true,message:"Category Updated Successfully",category})
    }
    catch(err){
        console.log(err) 
    }
}