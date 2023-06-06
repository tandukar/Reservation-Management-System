const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async(req, res) => {
    try {
        const { username, firstname, lastname, email, password } = req.body;
        const emailExists = await User.findOne({ email });
        if (emailExists)
            return res.status(400).json({ message: "Email already exists" });
        const salt = await bcrypt.genSalt(10);
        const hashPwd = await bcrypt.hash(password, salt);
        const user = await User({
            username,
            firstname,
            lastname,
            email,
            password: hashPwd,
        });
        await user.save();
        res.status(200).json({ message: "User created successfully", user });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
};