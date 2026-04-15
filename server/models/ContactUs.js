const mongoose = require("mongoose")

const ContactusSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Must Required"]
    },
    email: {
        type: String,
        required: [true, "Email Address Must Required"]
    },
    phone: {
        type: Number,
        required: [true, "Phone Must Required"]
    },
    subject: {
        type: String,
        required: [true, "Subject Must Required"]
    },
    message: {
        type: String,
        required: [true, "Message Must Required"]
    },
    date: {
        type: String,
        default: ""
    },

    active: {
        type: Boolean,
        default: true
    }
})
const Contactus = new mongoose.model("Contactus", ContactusSchema)
module.exports = Contactus