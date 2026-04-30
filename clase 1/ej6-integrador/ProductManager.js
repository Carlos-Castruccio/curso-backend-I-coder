/* ProductManager.js: Implementa una clase ProductManager con:

Constructor que inicialice un arreglo de productos y un contador de IDs autoincrementales.
Métodos para agregar, obtener todos, buscar por ID y actualizar productos.
Validaciones para evitar datos incompletos o inválidos.
Manejo de errores con throw y captura en pruebas. */

export class ProductManager {
    constructor() {
        this.productos = []
        this.id = 1
    }
    agregarProducto(producto) {
        this.productos.push({ id: this.id, producto: producto })
        this.id += 1
    }
    mostrarProductos() {
        return this.productos
    }
    buscarPorId(id) {
        if (typeof id !== "number") {
            throw new Error("El id no es válido")
        }
        let product = this.productos.find(producto => producto.id == id)
        if (!product) {
            return "El id no tiene asociado ningún producto"
        }
        return product
    }
}

