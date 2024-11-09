// const express=require("express");
// const fileUpload = require('express-fileupload');


// const app=express();
// const upload=require("./Routes/upload");
// // require("dotenv").config();


// app.use(express.json());
// app.use(fileUpload({
//     useTempFiles:true,
//     tempFileDir:"/tmp/",
// }))


// app.listen(4000,()=>{console.log("SERVER IS ON")});


// const db=require("./config/db");
// db.connect();

// const cloudinary=require("./config/cloud");
// cloudinary.cloudinaryConnect();


// app.use("/base",upload);



const crypto = require("crypto")
const token = crypto.randomBytes(20).toString("hex")
console.log(token);

const otpGenerator = require("otp-generator")


var otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  })

console.log(otp);