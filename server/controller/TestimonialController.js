const Testimonial = require("../models/Testimonial");
const fs = require("fs")

async function getRecord(req, res) {
    try {
        let data = await Testimonial.find().sort({ _id: 1 })
        res.send({ status: 200, result: "Done", count: data.length, data: data });
    } catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }

}


async function createRecord(req, res) {
    try {
        let data = new Testimonial(req.body)
        if (req.file) {
            data.pic = req.file.path
        }
        await data.save()
        res.send({ status: 200, result: "Done", data: data })
    }
    catch (error) {
        console.log(error)
        if (error.errors.name)
            res.send({ status: 400, result: "Fail", message: error.errors.name.message })
        else if (error.errors.profile)
            res.send({ status: 400, result: "Fail", message: error.errors.profile.message })
        else if (error.errors.pic)
            res.send({ status: 400, result: "Fail", message: error.errors.pic.message })
        else if (error.errors.message)
            res.send({ status: 400, result: "Fail", message: error.errors.message.message })
        else
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}




async function getSingleRecord(req, res) {
    try {
        let data = await Testimonial.findOne({ _id: req.params._id })
        if (data) {
            res.send({ status: 200, result: "Done", data: data })
        }
        else
            res.send({ status: 404, result: "Fail", message: "Record not Found" })
    } catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}

async function updateRecord(req, res) {
    try {
        let data = await Testimonial.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.profession = req.body.profession ?? data.profession
            data.message = req.body.message ?? data.message
            data.star = req.body.star ?? data.star



            if (req.file) {
                try {
                    fs.unlinkSync(data.pic)
                } catch (error) {
                    data.pic = req.file.path
                }
            }
            await data.save()
            res.send({ status: 200, result: "Done", message: "Record has been Updated" })

        }
        else
            res.send({ status: 404, result: "Fail", message: "Record not Found" })

    } catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}
async function deleteRecord(req, res) {
    try {
        let data = await Testimonial.findOne({ _id: req.params._id })
        if (data) {
            try {
                fs.unlinkSync(data.pic)
            } catch (error) { }
            await data.deleteOne()
            res.send({ status: 200, result: "Done", message: "Record has been Deleted" })
        }
        else
            res.send({ status: 404, result: "Fail", message: "Record not Found" })
    } catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}

module.exports = {
    getRecord: getRecord,
    createRecord: createRecord,
    getSingleRecord: getSingleRecord,
    updateRecord: updateRecord,
    deleteRecord: deleteRecord,
};
