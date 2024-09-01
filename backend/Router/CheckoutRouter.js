const checkoutRouter = require("express").Router()
const { getSingleRecord ,getUserRecord, createRecord, updateRecord, deleteRecord, order, verifyOrder, getRecord} = require("../Controller/Checkout")
const { verifyBuyer, verifyAdmin,verifyBoth } = require("../verification")

// checkoutRouter.get("/", verifyAdmin, getSingleRecord)
checkoutRouter.get("/", verifyBoth, getRecord)           //all record for admin
checkoutRouter.get("/user/:userid", verifyBoth, getUserRecord)//all record of user
checkoutRouter.get("/:_id", verifyAdmin, getSingleRecord)//single record
checkoutRouter.post("/", verifyBuyer, createRecord)
checkoutRouter.put("/:_id", verifyAdmin, updateRecord)
checkoutRouter.delete("/:_id", verifyAdmin, deleteRecord)
checkoutRouter.post("/orders", verifyBuyer, order)
checkoutRouter.post("/verify", verifyBuyer, verifyOrder)

module.exports = checkoutRouter
