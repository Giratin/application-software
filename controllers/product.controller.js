const { Product } = require('../models/product.model');
const { User } = require('../models/user.model');

const fs = require('fs');

module.exports = {
    create: async (req, res, next) => {
        const { title, quantity , description, user_id } = req.body;

        console.log(user_id)
        const user = await User.findOne({ _id : user_id });

        console.log(user)
        const product = new Product({
            title, quantity, description , createdBy :user
        });

        if(req.file){
            product.image = req.file.filename;
        }

        await product.save();
        res.json({product})
    },
    get: async (req, res, next) => {
        const products = await Product.find().populate('createdBy');
        res.json(products)
    },
    update : async (req, res, next)=>{
        const { _id } = req.params;

        const product = await Product.findOne({ _id });

        if(!product){
            return res.status(404).json("Product not found")
        }

        if(req.file){
            if(product.image){
                fs.unlink('./public/images/'+product.image , (err)=>{
                    if(err) console.log(err)
                })
            }
            product.image = req.file.filename;
        }
        const { title, quantity , description } = req.body;
        product.title = title;
        product.quantity = quantity;
        product.description = description;

        await product.save();
        res.json(product);
    }

    
}
