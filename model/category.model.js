const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    title: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
},
    { timestamps: true }
)
module.exports = mongoose.model("Category", categorySchema)