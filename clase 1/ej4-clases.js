/* Crea una clase llamada Producto que reciba en su constructor nombre y precio.
Añade un método mostrarInfo que retorne un mensaje usando template strings con el nombre y precio del producto.
Implementa un método actualizarPrecio(nuevoPrecio) que valide que el nuevo precio sea un número positivo. Si no es válido, lanza un error con un mensaje claro.
Crea una instancia de Producto y prueba los métodos, manejando posibles errores con try/catch. */


class Producto{
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

    mostrarInfo (){
        return `Nombre: ${this.nombre}, Precio: ${this.precio}`
    }

    actualizarPrecio(nuevoPrecio){
        if(typeof(nuevoPrecio)!=='number' || nuevoPrecio<0){
            throw new Error("El dato ingresado no es un número válido")
        }
    }
}

let miProducto = new Producto("Pan",150)
const mensaje= miProducto.mostrarInfo()
console.log(mensaje)
miProducto.actualizarPrecio("10")