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
    }
}