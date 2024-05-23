const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/product.controller.js');

router
  .post('/', createProduct)
  .get('/', getProducts)
  .get('/:id', getProduct)
  .put('/:id', updateProduct)
  .delete('/:id', deleteProduct)

module.exports = router;