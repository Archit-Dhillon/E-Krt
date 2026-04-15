const mongoose = require("mongoose")

async function getConnect() {
    // await mongoose.connect("mongodb://127.0.0.1:27017/e_Krt")
    await mongoose.connect("mongodb+srv://ArrEKrt:Archit123@cluster0.dl6yoco.mongodb.net/E_Krt")

    console.log("Database is Connected  fssdxsf")
}


getConnect()