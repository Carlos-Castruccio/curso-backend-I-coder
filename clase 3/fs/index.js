//const fs = require('fs'); //CommonJs - Sistema antiguo de módulos en Node.js antes de ES6
//En ES Modules se utiliza import fs from 'fs';
import fs from 'fs'

// Leemos un archivo JSON
fs.readFile('config.json', 'utf8', (err, data) => {

  // Manejo de errores
  if (err) {
    console.error("Error al leer el archivo:", err.message);
    return;
  }

  console.log("Archivo leído correctamente");
  console.log("--------------------------------");

  try {

    // Convertimos el texto JSON a objeto JavaScript
    const config = JSON.parse(data);

    console.log("Configuración cargada:");
    console.log(config);

    console.log("--------------------------------");

    // Accedemos a propiedades específicas
    console.log("Puerto:", config.port);
    console.log("Entorno:", config.environment);

  } catch(error) {
    console.error("El archivo no contiene JSON válido");
  }

});

console.log("Leyendo archivo...");
