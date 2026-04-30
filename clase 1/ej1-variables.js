/* Ejercicio 1: Declaración y reasignación

Declara una variable con let y asígnale un valor.
Intenta reasignarla y observa el resultado.
Declara una constante con const y prueba reasignarla para ver el error. */

let miVariable = 1
console.log(miVariable)
miVariable = 2 //funciona
console.log(miVariable)

const miConstante = 1
console.log(miConstante)
//miConstante = 2 //error
console.log(miConstante)

/*Tener en cuenta que const no permite la reasignación de nombres a la variable
 lo cual no significa que no pueda modificar su contenido, como por ej un array*/

 const miArray = [1,2]
 miArray.push(3) //funciona
console.log(miArray)

miArray = [3,4] // error. No puedo reasignar 