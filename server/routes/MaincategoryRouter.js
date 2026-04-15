const maincategoryRouter = require("express").Router()
const {
    getRecord,
    createRecord,
    getSingleRecord,
    deleteRecord,
    updateRecord,
} = require("../controller/MaincategoryController");
const { verifyAdmin } = require("../verification");


maincategoryRouter.get("/", getRecord)
maincategoryRouter.post("/", verifyAdmin, createRecord)
maincategoryRouter.get("/:_id", getSingleRecord)
maincategoryRouter.put("/:_id", verifyAdmin, updateRecord)
maincategoryRouter.delete("/:_id", verifyAdmin, deleteRecord)

module.exports = maincategoryRouter