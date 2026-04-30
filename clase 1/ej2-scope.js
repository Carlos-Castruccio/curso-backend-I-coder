/* Ejercicio 2: Scope de bloque vs función

Crea una función donde declares variables con var, let y const dentro de un bloque if.
Intenta acceder a esas variables fuera del bloque y dentro de la función.
Ejecuta el código y analiza qué variables son accesibles y por qué. */

if(true){
    var miVariableVar = 1
    let miVariebleLet = 2
    const miVariableConst = 3
}

console.log(miVariableVar)
//console.log(miVariebleLet) //error de scope
//console.log(miVariableConst) //error de scope

miVariableVar = 0 //pasa
console.log(miVariableVar)
miVariableLet = 0 //pasa pero no es la misma variable que la del bloque if
console.log(miVariableLet) 
miVariableConst = 0 //pasa pero no es la misma variable que la del bloque if
console.log(miVariableConst)