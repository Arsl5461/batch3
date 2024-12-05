const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    color: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    }
},
    { timestamps: true }
)
module.exports = mongoose.model("Products", productSchema)