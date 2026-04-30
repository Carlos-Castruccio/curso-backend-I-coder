

//saludar2(); //ERROR
const saludar2 = () => {
  console.log('¡Hola desde arrow function!');
};

let globalVar = 'Soy global';

function mostrar() {
  let localVar = 'Soy local';
  console.log(globalVar); // Accede a global
  console.log(localVar);  // Accede a local
}

mostrar();
//console.log(localVar); // Error: no está definida

/* Instrucciones:
Práctica: Explorando funciones, hoisting y scope en Node.js
Ejecuta el siguiente código en tu terminal con Node.js:
javascript */


// Prueba de hoisting
saludar();

function saludar() {
  console.log('¡Hola desde función tradicional!');
}

// Intento de llamar arrow function antes de declararla
try {
  despedir();
} catch (error) {
  console.log('Error:', error.message);
}

const despedir = () => {
  console.log('¡Adiós desde arrow function!');
};

// Contexto de this
const objeto = {
  nombre: 'Backend',
  metodoTradicional: function() {
    console.log('Función tradicional this.nombre:', this.nombre);
  },
  metodoArrow: () => {
    console.log('Arrow function this.nombre:', this.nombre);
  }
};

objeto.metodoTradicional();
objeto.metodoArrow();

// Scope
let variableGlobal = 'Global';
function pruebaScope() {
  let variableLocal = 'Local';
  console.log(variableGlobal); // Accede a global
  console.log(variableLocal);  // Accede a local
}
pruebaScope();
// console.log(variableLocal); // Descomenta para ver error
