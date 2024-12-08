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


exports.generateOTP = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(email)
        const user = await User.findOne({ email: email });
        console.log(user)
        if (!user) {
            return res.json({ status: 404, message: "User not found", success: false })
        }
        const code = Math.floor(100000 + Math.random() * 900000);
        user.code = code;
        user.save();
        return res.json({ status: 200, message: "OTP generated successfully", success: true })

    }
    catch (err) {
        console.log(err)
    }
}

exports.verify = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({ status: 404, message: "User not found", success: false })
        }
        if (otp == user.code) {
            console.log("User already:")
            return res.json({ status: 200, message: "User verified successfully", success: true })
        }
        else {
            res.json({ status: 404, message: "User not found", success: false })
        }
    }
    catch (err) {
        console.log(err)
    }
}

exports.updatePassword = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({ status: 404, success: false, message: "User not found" })
        }

        const hashedPassword = await bcrypt.hash(password, SALT);
        user.password = hashedPassword;
        await user.save();
        return res.json({ success: true, message: "User Password Updated successfully", status: 200 })
    }
    catch (err) {
        console.log(err.message)
    }
}