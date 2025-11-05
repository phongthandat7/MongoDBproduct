const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


router.get('/products', adminController.getProducts);

router.get('/products/:productId', adminController.getProductById);

router.post('/add-product', adminController.postAddProduct);


router.put('/edit-product/:productId', adminController.putEditProduct);

router.delete('/delete-product/:productId', adminController.delDeleteProduct);

module.exports = router;
