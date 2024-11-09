const mongoose=require("mongoose");

require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.url)
    .then(()=>{console.log("DB CONNECTED")})
    .catch((error)=>{
        console.log("120 ERROR");
        console.log(error.message);
    })
}

