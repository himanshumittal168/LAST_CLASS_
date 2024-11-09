const mongoose=require("mongoose");
const nodemailer=require("nodemailer");

// name email imgurl
require("dotenv").config();

const fileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    email:{
        type:String,
    }
})
// POST MIDDLEWARE

fileSchema.post("save",async function(doc){
    try
    {
        console.log("WHAT IS IN THE DOC"+doc);

        let transporter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })

        let info=await transporter.sendMail({
            from:"Team Internshala",
            to:doc.email,
            subject:"Your file has been uploaded",
            html:`<h1>Hello Guys Thanks for Uploading Image </h1> <p><a href="${doc.imageUrl}">IMAGE URL</a></p>`,
        })
        console.log("MAIL SENT");
    }
    catch(err)
    {
        console.log(err);
    }
})






const File=mongoose.model("File",fileSchema);
module.exports=File;