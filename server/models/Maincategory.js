const mongoose = require("mongoose")

const MaincategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Maincategory Must Required"],
        unique: [true]
    }
})
const Maincategory = new mongoose.model("Maincategory", MaincategorySchema)
module.exports = Maincategory