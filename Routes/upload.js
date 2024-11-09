const express=require("express");
const router=express.Router();

const {localUpload, imageUpload}=require("../controller/FileUpload");



router.post("/lu",localUpload);
router.post("/iu",imageUpload);





module.exports=router;