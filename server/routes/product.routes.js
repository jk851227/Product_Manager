const ProductController = require('../controllers/product.controller');

module.exports = app => {
    // CREATE
    app.post("/api/products/new", ProductController.createProduct);
    // READ
    app.get("/api/products", ProductController.allProducts);
    app.get("/api/products/:id", ProductController.productDetail);
    // PATCH
    // app.patch("/api/products/:id", ProductController.updateProduct);
}