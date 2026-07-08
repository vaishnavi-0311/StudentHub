const User = require("../models/userModel");

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken");

// const SECRET = "secretkey";

// REGISTER

exports.register = async (req, res) => {

    try {
        const { name, email, password, role } = req.body;

        // check user exists

        const existingUser = await User.findOne({ email });


        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: " User Already Exists "
            })

        }

        // HashPassword

        const hashPassword = await bcrypt.hash(password, 8);

        // create User

        const user = await User.create({
            name,
            email,
            password: hashPassword,
            role,
        })

        // // HIDE PASSWORD

        // user.password = undefined;

        res.status(201).json({
            success: true,
            message: "Registered Successfully", user
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}


// LOGIN 

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        // check user 

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({
                message: "User Not Found"
            });
        }

        // compare password 

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            })
        }

        // Generate JWT Token 

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        res.status(200).json({
            success: true,
            message: "login successful",
            token,   // 👈 ADD THIS
            user     // 👈 optionally send user too
        })
    }
    catch (err) {

        res.status(500).json({
            message: err.message
        })
    }
}
