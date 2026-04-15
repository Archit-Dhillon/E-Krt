const productRouter = require("express").Router()
const multer = require("multer");
const {
    getRecord,
    createRecord,
    getSingleRecord,
    deleteRecord,
    updateRecord,
    search
} = require("../controller/ProductController");
const { verifyAdmin } = require("../verification");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/products");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage })

productRouter.get("/", getRecord)
productRouter.get("/:_id", getSingleRecord)
productRouter.post("/", verifyAdmin,
    upload.fields([
        { name: "pic1", maxCount: 1 },
        { name: "pic2", maxCount: 1 },
        { name: "pic3", maxCount: 1 },
        { name: "pic4", maxCount: 1 },
    ])
    , createRecord)
productRouter.put("/:_id", verifyAdmin,
    upload.fields([
        { name: "pic1", maxCount: 1 },
        { name: "pic2", maxCount: 1 },
        { name: "pic3", maxCount: 1 },
        { name: "pic4", maxCount: 1 },
    ])
    , updateRecord)
productRouter.delete("/:_id", verifyAdmin, deleteRecord)
productRouter.post("/search", search);


module.exports = productRouter