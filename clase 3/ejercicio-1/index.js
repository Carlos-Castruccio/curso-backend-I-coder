const fs = require('fs');
const path = require('path');

let input = '';
process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const relativePath = input.trim();
  const absolutePath = path.join(__dirname, relativePath);

  // Leer archivo JSON
  const data = fs.readFileSync(absolutePath, 'utf-8');
  const config = JSON.parse(data);

  // Incrementar version
  if (typeof config.version === 'number') {
    config.version += 1;
  } else {
    config.version = 1; // Si no existe o no es número, inicializar
  }

  // Guardar archivo actualizado
  fs.writeFileSync(absolutePath, JSON.stringify(config, null, 2), 'utf-8');

  // Imprimir nuevo valor de version
  console.log(config.version);
});

//Ejectutar echo settings.json | node index.js
// | pipe
// Un pipe es un mecanismo del sistema operativo para conectar procesos mediante un flujo de datos.
//tomá la salida de echo y la usa como entrada (stdin) de node index.js