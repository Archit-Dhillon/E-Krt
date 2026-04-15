const testimonialRouter = require("express").Router()
const { getRecord, getSingleRecord, createRecord, updateRecord, deleteRecord } = require("../controller/TestimonialController")
const multer = require("multer")
const { verifyAdmin } = require("../verification");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/testimonial")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
})
const upload = multer({ storage: storage })
testimonialRouter.get("/", getRecord)
testimonialRouter.get("/:_id", getSingleRecord)
testimonialRouter.post("/", verifyAdmin, upload.single("pic"), createRecord)
testimonialRouter.put("/:_id", verifyAdmin, upload.single("pic"), updateRecord)
testimonialRouter.delete("/:_id", verifyAdmin, deleteRecord)

module.exports = testimonialRouter