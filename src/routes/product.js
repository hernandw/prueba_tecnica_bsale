const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.home);

router.get('/product/api', productController.api)

router.get('/product/:id', productController.busqueda);


module.exports = router;
