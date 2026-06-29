import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre: String,
  categoria: String,
  precio: Number,
  stock: Number
});

const Producto = mongoose.model("Producto", productoSchema);

export default Producto;