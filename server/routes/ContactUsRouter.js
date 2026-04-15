const contactusRouter = require("express").Router()
const {
    getRecord,
    createRecord,
    getSingleRecord,
    deleteRecord,
    updateRecord,
} = require("../controller/ContactUsController");
const { verifyAdmin } = require("../verification");


contactusRouter.get("/", verifyAdmin, getRecord)
contactusRouter.get("/:_id", verifyAdmin, getSingleRecord)
contactusRouter.post("/", createRecord)
contactusRouter.put("/:_id", verifyAdmin, updateRecord)
contactusRouter.delete("/:_id", verifyAdmin, deleteRecord)

module.exports = contactusRouter
