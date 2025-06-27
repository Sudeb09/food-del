import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tomato:tomato2025@cluster0.pwomecq.mongodb.net/food-del')
    .then(()=>console.log("DB Connected"));
}