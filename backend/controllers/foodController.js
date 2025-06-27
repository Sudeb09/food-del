import foodModel from "../models/foodModel.js";
import fs from 'fs'


// add food item
const addFood = async (req, res) => {
    let image_filename = req.file.filename;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        food.save();
        res.json({success: true, message: "Food added successfully"})
    } catch (error) {
        console.log(error)
        res.json({success: false, mesage:"Error during adding food"})
    }

}

// all food list
const listFood = async (req, res) => {
    try {
        // fetching all foods from database
        const foods = await foodModel.find({});
        res.json({success: true, data: foods})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error in fetching food items"})
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, ()=>{})  // deleting image from upload folder

        await foodModel.findByIdAndDelete(req.body.id);   // deleting from database
        res.json({success:true, message:"Food deleted successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error in deleting food"})
    }
}

export {addFood, listFood, removeFood}