const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res)=>{
    Product.find().sort({title:1}) //SORTING
    .then(allproducts =>{
        res.json({results: allproducts})
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.createProduct = (req, res)=>{

    console.log("REQUEST.BODY LOOKS LIKE THIS--->", req.body)
    Product.create(req.body)
        .then(newProduct=>{
            res.json({results: newProduct})
        })
        .catch(err=>{
            console.log(err)
            res.json(err)
        })
}

module.exports.findOneProduct = (req, res)=>{
    Product.findOne({_id: req.params.id})
        .then(oneProduct=>{
            res.json({results: oneProduct})
        })
        .catch(err=>res.json(err))
}

module.exports.updateOneProduct = (req,res)=>{
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {useFindAndModify: true, runValidators: true} //useFindAndModify
        )
    .then(updatedProduct =>{
        res.json({results: updatedProduct})
    })
    .catch(err=>res.json(err))
}

module.exports.deleteProduct = (req,res)=>{
    Product.deleteOne({_id: req.params.id})
    .then(deletedProduct=>{
        res.json({results: deletedProduct})
    })
    .catch(err=>res.json(err))
}