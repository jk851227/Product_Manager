const ProductController = require('../controllers/product.controller');

module.exports = app => {
    // Create
    app.post("/api/products/new", ProductController.createProduct);
    // Read
    app.get("/api/products", ProductController.allProducts);
    app.get("/api/products/:id", ProductController.productDetail);
}