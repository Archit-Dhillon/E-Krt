const mongoose = require("mongoose")

const CheckoutSchema = mongoose.Schema({
    userid: {
        type: String,
        required: [true, "User Id Must Required"]
    },
    orderstatus: {
        type: String,
        default: "Order is Placed"
    },
    paymentstatus: {
        type: String,
        default: "Pending"
    },
    paymentmode: {
        type: String,
        default: "Cash On Delevery"
    },
    subtotal: {
        type: Number,
        required: [true, "Subtotal is Required"]
    },
    shipping: {
        type: Number,
        required: [true, "Shipping is Required"]
    },
    total: {
        type: Number,
        required: [true, "Total is Required"]
    },
    date: {
        type: String,
        default: ""
    },
    rppid:
    {
        type: String,
        default: ""
    },
    products: [{
        productid: {
            type: String,
        },
        name: {
            type: String,
        },
        brand: {
            type: String,
        },
        color: {
            type: String,
        },
        size: {
            type: String,
        },
        price: {
            type: String,
        },
        qty: {
            type: String,
        },
        total: {
            type: String,
        },
        pic: {
            type: String,
        },
    }]
})
const Checkout = new mongoose.model("Checkout", CheckoutSchema)
module.exports = Checkout