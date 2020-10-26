const express = require('express');
const router = express.Router();

const productController= require('../controllers/product.controller');
const multer = require('multer')
const path = require('path');

const stockage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/images')
    },
    filename : (req, file, cb) =>{
        let newFileName = new Date().getTime().toString() + path.extname(file.originalname);
        cb (null, newFileName);
    }
})

const upload = multer({ storage : stockage })

/*
    avatar image
    title: string
    quantity : number
    user_id : 
    description
*/
/**
 * @Path /products/
 */
router.route('/')
    .post( upload.single('avatar'), productController.create )
    .get( productController.get );

router.put('/:_id', upload.single('avatar'), productController.update);

module.exports = router;