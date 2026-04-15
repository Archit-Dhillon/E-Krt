const checkoutRouter = require("express").Router()
const {
    getRecord,
    createRecord,
    getSingleRecord,
    deleteRecord,
    updateRecord,
    getUserRecord,
    order,
    verifyOrder,
} = require("../controller/CheckoutController");
const { verifyAdmin, verifyBuyer } = require("../verification");


checkoutRouter.get("/", verifyAdmin, getRecord)
checkoutRouter.get("/user/:userid", verifyBuyer, getUserRecord)
checkoutRouter.get("/:_id", verifyAdmin, getSingleRecord)
checkoutRouter.post("/", verifyBuyer, createRecord)
checkoutRouter.put("/:_id", verifyAdmin, updateRecord)
checkoutRouter.delete("/:_id", verifyAdmin, deleteRecord)
checkoutRouter.post("/orders", verifyBuyer, order)
checkoutRouter.post("/verify", verifyBuyer, verifyOrder)

module.exports = checkoutRouter
