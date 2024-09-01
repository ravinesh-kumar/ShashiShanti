const productRouter = require("express").Router()
const multer = require('multer') //npm i multer
const { verifyAdmin } = require("../verification")
const { getRecord, createRecord, getSingleRecord, updateRecord, deleteRecord, search } = require("../Controller/ProductController")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/products')
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname)
    }
})

const upload = multer({ storage: storage })



productRouter.get("/", getRecord)
productRouter.post("/", verifyAdmin, upload.fields([
    { name: "pic1", maxCount: 1 },
    { name: "pic2", maxCount: 1 },
    { name: "pic3", maxCount: 1 },
    { name: "pic4", maxCount: 1 }
]), createRecord)
productRouter.get("/:_id", getSingleRecord)
productRouter.put("/:_id", verifyAdmin, upload.fields([
    { name: "pic1", maxCount: 1 },
    { name: "pic2", maxCount: 1 },
    { name: "pic3", maxCount: 1 },
    { name: "pic4", maxCount: 1 }
]), updateRecord)
productRouter.delete("/:_id", verifyAdmin, deleteRecord)
productRouter.post("/search", search)

module.exports = productRouter
