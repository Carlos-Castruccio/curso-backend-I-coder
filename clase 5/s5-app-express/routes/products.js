const express = require('express');

const router = express.Router();

const products = require('../data/products');

router.get('/products', (req, res) => {

  res.render('products', {
    products
  });

});

router.get('/products/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const product = products.find(
    p => p.id === id
  );

  if (!product) {

    return res.status(404).render('error', {
      message: 'Producto no encontrado'
    });

  }

  res.render('productDetail', {
    product
  });

});

module.exports = router;