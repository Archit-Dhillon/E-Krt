const express = require("express");
const cors = require("cors")
require("dotenv").config();
require("./dbConnect");
const path = require("path")

const router = require("./routes/router")

const app = express();


app.use(express.json());
app.use(cors())

app.set(express.static("./public"))
app.use(express.static(path.join(__dirname, 'build')))

app.use("/api", router)

app.use("/public", express.static("./public"))
app.use('*', express.static(path.join(__dirname, 'build')))


let port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is Running at http://localhost:${port}`);
});
