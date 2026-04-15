const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Must Required"]
    },
    maincategory: {
        type: String,
        required: [true, "MaincategoryMust Required"]
    },
    subcategory: {
        type: String,
        required: [true, "Subcategory Must Required"]
    },
    brand: {
        type: String,
        required: [true, "Brand Must Required"]
    },
    color: {
        type: String,
        required: [true, "Color Must Required"]
    },
    size: {
        type: String,
        required: [true, "Size Must Required"]
    },
    baseprice: {
        type: Number,
        required: [true, "Baseprice Must Required"]
    },
    discount: {
        type: Number,
        required: [true, "Discount Must Required"]
    },
    description: {
        type: String,
        default: "",
    },
    finalprice: {
        type: Number,
        required: [true, "Finalprice Must Required"]
    },
    stock: {
        type: String,
        default: "",
    },
    pic1: {
        type: String,
        default: "",
    },
    pic2: {
        type: String,
        default: "",
    },
    pic3: {
        type: String,
        default: "",
    },
    pic4: {
        type: String,
        default: "",
    },
})
const Product = new mongoose.model("Product", ProductSchema)
module.exports = Product