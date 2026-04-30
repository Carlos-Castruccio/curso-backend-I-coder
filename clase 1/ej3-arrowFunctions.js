/* Ejercicio 3: Arrow functions básicas

Define una función tradicional y una arrow function que reciban dos números y retornen su suma.
Ejecuta ambas y compara la sintaxis y resultados. */

function sumarTradicional(a, b) {
    return a + b
}

const sumarFlecha = (a, b) => a + b

console.log(sumarTradicional(2, 3))
console.log(sumarFlecha(2, 3))