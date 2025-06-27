import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'
import { response } from "express";


// login user
const loginUser = async(req, res) => {
    const {email,password} = req.body;

    try {
        const user = await userModel.findOne({email})

        // Checking the user email is present in the databse or not
        if (!user){
            return res.json({success:false, message:'User does not exist'})
        }

        // Checking the passwor that the user have entered is matched with the database or not
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.json({success:false, message:'Password does not matched'})
        }

        // Creating jwt token is login successfull
        const token = createToken(user._id)
        res.json({success:true, token})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Internal server error'})
    }
}

// creating jwt token
const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// regester user
const registerUser = async (req, res) => {
    const {name,password,email} = req.body;

    try {
        // checking is user already exists
        const exists = await userModel.findOne({email})
        if (exists){
            return res.json({success:false, message: 'User already exists'})
        }

        // checking email format & strong password
        if (!validator.isEmail(email)){
            return res.json({success:false, message: "Please enter a valid email"})
        }

        if (password.length < 8){
            return res.json({success:false, message: 'Please enter a strong password'})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating new user
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        // saving user to the database
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true, token})

    } catch (error) {
        res.json({success:false, message:"Internal server error"})
    }
}

export {loginUser, registerUser}