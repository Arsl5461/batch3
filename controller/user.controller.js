const User = require("../model/user.model")
const bcrypt = require("bcryptjs")
const SALT = 10;
const jwt = require("jsonwebtoken")

exports.store = async (req, res) => {
    try {
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, SALT)
        req.body.password = hashedPassword;
        const user = await User.create(req.body)
        return res.json({ status: 200, success: true, message: "user Created Successfully", user })
    }
    catch (err) {
        console.log(err)
    }
}
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findedUser = await User.findOne({ email: email })
        if (!findedUser) {
            return res.json({ status: 404, success: false, message: "User not found" })
        }
        const userFound = await bcrypt.compare(password, findedUser.password)
        if (userFound) {
            const token = jwt.sign({ id: findedUser._id }, process.env.SECRET)
            return res.json({ status: 200, succes: true, message: "User Logged in", token })
        }
        else {
            return res.json({ success: false, status: 403, message: "Password Does not match" })
        }
    }
    catch (err) {
        console.log(err)
    }
}
exports.index = async (req, res) => {
    try {
        const users = await User.find()
        return res.json({ status: 200, success: true, message: "users Fetched Successfully", users })
    }
    catch (err) {
        console.log(err)
    }
}
exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ _id: id })
        if (!user) {
            return res.json({ status: 404, success: false, message: "user not found" })
        }
        return res.json({ status: 200, success: true, message: "user fetched Successfully", user })
    }
    catch (err) {
        console.log(err)
    }
}
exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndDelete({ _id: id })
        if (!user) {
            return res.json({ status: 404, success: false, message: "user not found" })
        }
        return res.json({ status: 200, success: true, message: "user Deleted Successfully" })
    }
    catch (err) {
        console.log(err)
    }
}
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (!user) {
            return res.json({ status: 404, success: false, message: "user not found" })
        }
        return res.json({ status: 200, success: true, message: "user Updated Successfully", user })
    }
    catch (err) {
        console.log(err)
    }
}