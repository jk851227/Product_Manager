const Product = require('../models/product.model');

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    allProducts: (req, res) => {
        Product.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    productDetail: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    updateProduct: (req, res) => {
        Product.updateOne({_id: req.params.id}, req.body, {new: true})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}