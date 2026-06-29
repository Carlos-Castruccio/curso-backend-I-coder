import express from 'express';


const router = express.Router();
import Producto from '../models/Producto.js';

// LISTAR + FILTRO
router.get('/', async (req, res) => {
  const categoria = req.query.categoria;

  const filtro = categoria ? { categoria } : {};

  const productos = await Producto.find(filtro);

  res.render('productos', {
    productos,
    categoriaActual: categoria || ''
  });
});

// CREAR
router.post('/crear', async (req, res) => {
  const { nombre, categoria, precio, stock } = req.body;

  await Producto.create({
    nombre,
    categoria,
    precio,
    stock
  });

  res.redirect('/productos');
});

// ELIMINAR
router.post('/eliminar/:id', async (req, res) => {
  await Producto.deleteOne({ _id: req.params.id });
  res.redirect('/productos');
});

export default router;