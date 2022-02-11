const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.home);


router.get('/products/:id', productController.busqueda);

module.exports = router;
