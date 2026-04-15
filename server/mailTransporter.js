const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    host: "smpt.gmail.com",
    port: 587,
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASSWORD,
    },
})
module.exports = transport