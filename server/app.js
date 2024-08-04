const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const multer = require("multer");
require('dotenv').config();


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());


//route importing
const user = require('../server/routes/userRoute');


app.use("/api/v1/", user);


app.get("/", function(req, res){
    res.send("Services is up and running")
})


module.exports = app;
