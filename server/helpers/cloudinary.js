const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config(
    {
        cloud_name : 'daknktzmk',
        api_key : '236636548488389',
        api_secret : "7MmZJFOsHSyeDe3sh887Aui9EG0",
    }
);

const storage = new multer.memoryStorage();

async function imageUploadUtils(file){
    const result = await cloudinary.uploader.upload(
        file, {
            resource_type : 'auto'
        }
    )

    return result;
}
const upload = multer({storage});

module.exports= {upload, imageUploadUtils};