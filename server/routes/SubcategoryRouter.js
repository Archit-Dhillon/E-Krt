const subcategoryRouter = require("express").Router()
const {
    getRecord,
    createRecord,
    getSingleRecord,
    deleteRecord,
    updateRecord,
} = require("../controller/SubcategoryController");
const { verifyAdmin } = require("../verification");


subcategoryRouter.get("/", getRecord)
subcategoryRouter.get("/:_id", getSingleRecord)
subcategoryRouter.post("/", verifyAdmin, createRecord)
subcategoryRouter.put("/:_id", verifyAdmin, updateRecord)
subcategoryRouter.delete("/:_id", verifyAdmin, deleteRecord)

module.exports = subcategoryRouter