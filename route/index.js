const express=require("express")
const router=express.Router();
const productRouter=require("./product.route")
const userRouter=require("./user.route")
const categoryRoute=require("./category.route")

router.use("/product",productRouter)
router.use("/user",userRouter)
router.use("/category",categoryRoute)


module.exports=router;