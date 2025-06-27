import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cartData: {type: Object, default: {}}
},{minimize:false}) // card data will be created without any data for minimize:false

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

// allowing this module to access from other modules
export default userModel;