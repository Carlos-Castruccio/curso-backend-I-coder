const express = require('express');
const products = require('../data/products');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    totalProducts: products.length
  });
});

module.exports = router;