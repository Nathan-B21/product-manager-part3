const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Title is required"],
        minLength:[3, "Title must be at least 3 chars"],
        maxLength:[1000000, "woah, we said title, not a lecture"]
    },
    price:{
        type: String,
        required: [true, "Price is required"]
        

    },
    desc:{
        type: String

    }
}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;