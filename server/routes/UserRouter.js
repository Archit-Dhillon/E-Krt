const userRouter = require("express").Router()
const { getRecord, getSingleRecord, createRecord, updateRecord, deleteRecord, login, forgetPassword1, forgetPassword2, forgetPassword3 } = require("../controller/UserController")
const multer = require("multer")
const { verifyAdmin, verifyBoth } = require("../verification");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/user")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
})
const upload = multer({ storage: storage })
userRouter.get("/", verifyAdmin, getRecord)
userRouter.get("/:_id", verifyBoth, getSingleRecord)
userRouter.post("/", upload.single("pic"), createRecord)
userRouter.put("/:_id", verifyBoth, upload.single("pic"), updateRecord)
userRouter.delete("/:_id", verifyAdmin, deleteRecord)
userRouter.post("/login", login)
userRouter.post("/forget-password-1", forgetPassword1)
userRouter.post("/forget-password-2", forgetPassword2)
userRouter.post("/forget-password-3", forgetPassword3)


module.exports = userRouter