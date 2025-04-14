import { User } from "../model/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


                                                           
export async function userRegister(req, res) {
    try {
        const { name, email, password, qualification } = req.body

        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(400).json({ message: "User Already Exist" })

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            name,
            email,
            password: hashedPassword,
            qualification
        })


        await user.save()
        res.status(201).json({ message: 'User Registered Successfully' })
    }
    catch (error) {
        res.status(500).json({ message: 'Error in Registering' })
        console.log(error);

    }
}

export async function userLogin(req, res) {
    try {
        const { email, password } = req.body

        if (!email || !password) return res.status(400).json({ message: "Invalid email or password format" })

        const user = await User.findOne({ email })
        if (!user || !user.password) return res.status(401).json({ message: "Invalid Credentials" })

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) return res.status(401).json({ message: "Invalid Credentials" })
                                                         
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict"

        })

        res.status(200).json({
            message: "User Logged in Successfully",
            token: token,
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" })

    }

}