const path = require('path');
const fs = require('fs');

// Construimos una ruta absoluta segura , por ej windows usa \ y linux/mac usa /, path.join se encarga de eso
const fullPath = path.join(__dirname, 'data', 'users.json'); //__dirname es una variable global que representa la ruta del directorio actual del archivo que se ejecuta, en este caso index.js, luego se añaden las carpetas y el nombre del archivo usando path.join para asegurar compatibilidad entre sistemas operativos    

console.log("Ruta completa del archivo:", fullPath);

console.log("--------------------------------");

// Leemos el archivo usando la ruta generada
fs.readFile(fullPath, 'utf8', (err, data) => {

  if (err) {
    console.error("Error al leer archivo:", err.message);
    return;
  }

  console.log("Archivo leído correctamente");
  console.log("--------------------------------");

  try {

    // Convertimos JSON string a objeto JS
    const users = JSON.parse(data);

    console.log("Usuarios encontrados:");
    console.log(users);

    console.log("--------------------------------");

    // Recorremos usuarios
    users.forEach((user, index) => {
      console.log(
        `Usuario ${index + 1}: ${user.nombre} - ${user.email}`
      );
    });

  } catch(error) {

    console.error("El JSON es inválido");
  }

});

console.log("Fin del código principal");