import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import productosRoutes from './routes/productos.js';

const app = express();

// __dirname 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.set('view engine', 'hbs');
app.set('views', join(__dirname, 'views'));

// MongoDB
mongoose.connect('mongodb://localhost:27017/tienda')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Routes
app.use('/productos', productosRoutes);

app.get('/', (req, res) => {
  res.redirect('/productos');
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});