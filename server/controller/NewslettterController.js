const Newsletter = require("../models/Newslettter");
const transport = require("../mailTransporter");


async function getRecord(req, res) {
    try {
        let data = await Newsletter.find().sort({ _id: 1 })
        res.send({ status: 200, result: "Done", count: data.length, data: data })


    } catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }

}
async function createRecord(req, res) {
    try {
        const data = new Newsletter(req.body)
        await data.save()
        mailOptions = {
            from: process.env.EMAIL_SENDER,
            to: data.email,
            subject: "OTP for Password Reser:Team E-Krt",
            text: `hello${data.name}
            YOur Email Address Sucessfully Register with us.
            Now we can send Our Latest Products and
            Deals for You
            Team:E-Krt
            `,
        }
        transport.sendMail(mailOptions, ((error) => {
            if (error) {

            }
        }))
        res.send({ status: 200, result: "Done", message: "Your Email Sucessfully Registered With us!" })



    } catch (error) {
        if (error.keyValue)
            res.send({ status: 400, result: "Fail", message: "Email is already Exist" })
        else if (error.errors.email)
            res.send({ status: 400, result: "Fail", message: error.errors.email.message })
        else
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}



async function deleteRecord(req, res) {
    try {
        let data = await Newsletter.findOne({ _id: req.params._id })
        if (data) {
            await data.deleteOne();
            res.send({ status: 200, result: "Done", message: "Record has been Deleted" })
        } else
            res.send({ status: 404, result: "Fail", message: "Record has been Not Found" })


    } catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}

module.exports = {
    getRecord: getRecord,
    createRecord: createRecord,
    deleteRecord: deleteRecord,
};
