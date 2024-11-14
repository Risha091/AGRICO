

const express = require('express');

const {
    handleImageUpload,
    addproduct,
    editProduct,
    fetchAllProducts,
    deleteProduct
} = require('../../controllers/admin/products-controller')

const {upload} = require('../../helpers/cloudinary')

const router = express.Router();

router.post('/upload-image', upload.single('my_file'), handleImageUpload)
router.post("/add", addproduct);
router.put("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/get", fetchAllProducts);


module.exports=router;