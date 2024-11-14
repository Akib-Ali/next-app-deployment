import mongoose from "mongoose";

const productModel = new mongoose.Schema({

    name : String,
    email : String,
    age: Number,

})

export const Product = mongoose.models.products || mongoose.model("products", productModel)