import { ProductManager } from "./ProductManager.js";

const productos = new ProductManager()

productos.agregarProducto("pera")
productos.agregarProducto("manzana")
productos.agregarProducto("naranja")

console.log(productos.productos)

//console.log(productos.buscarPorId("4")) //ERROR
console.log(productos.buscarPorId(2))
console.log(productos.buscarPorId(4))