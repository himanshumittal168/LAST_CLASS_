const File=require("../model/File");
const cloudinary=require("cloudinary").v2;
// local upload


exports.localUpload=async(req,res)=>
{
    try
    {
        const file=req.files.kiran;
        console.log("FILE ",file);

        console.log(__dirname);
        let path=__dirname+ "/files/" +Date.now()+`.${file.name.split('.')[1]}`;
        console.log(path);
        file.mv(path,(err)=>{console.log(err)});
        res.json(
            {
                success:true,
                message:"File uploaded successfully",
            })
    }
    catch(err)
    {
        console.log("ERROR IN UPLOADING");
    }
}


async function uploadtoCloudinary(file,folder,quality)
{
    const options={folder};

    if(quality)
    {
        options.quality=quality;
    }
    options.resource_type="auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.imageUpload=async(req,res)=>
{
    try
    {
        const {name,email}=req.body;

        const photo=req.files.kiran;

        const supportedFile=["jpg","jpeg","png"];
        const fileExtension=photo.name.split('.')[1].toLowerCase();

        if(!supportedFile.includes(fileExtension))
        {
            return res.status(400).json({
                success:false,
                msg:"Invalid Formate"
            })
        }
        

        console.log("FINALLY UPLOADING");

        const response=await uploadtoCloudinary(photo,"test");
        console.log(response);
        console.log("HELLO");

        const fileData=await File.create({
            name,
            email,
            imageUrl:response.secure_url,
        })
       

        res.json({
            success:true,
            url:response.secure_url,
            msg:"Uploading Done!!!"
        })

    }
    catch(err)
    {
        console.log(err);
        res.json({
            success:false,
            msg:"Uploading Failed!!!"
        })
    }
}
