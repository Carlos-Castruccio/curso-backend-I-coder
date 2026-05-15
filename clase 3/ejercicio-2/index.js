// Configura stdin para que los chunks lleguen como texto UTF-8
// en vez de llegar como Buffer binario
process.stdin.setEncoding('utf-8');

// Variable donde vamos a acumular todo el contenido recibido por stdin
let input = '';

// Escucha el evento 'data'
// Cada vez que llegan datos por stdin, Node ejecuta esta función
process.stdin.on('data', chunk => {

  // Agrega el nuevo fragmento recibido al string acumulado
  input += chunk;
});

// Escucha el evento 'end'
// Este evento ocurre cuando stdin se cierra (EOF)
process.stdin.on('end', () => {

  // Divide el texto completo en líneas
  // /\r?\n/ soporta tanto Linux/Mac (\n) como Windows (\r\n)
  const lines = input.trim().split(/\r?\n/);

  // Convierte la primera línea en número
  // Esa línea indica cuántos comandos vienen después
  const n = parseInt(lines[0]);

  // Obtiene solo las líneas que contienen comandos
  // slice(1, n + 1):
  // - empieza en índice 1
  // - termina antes de n + 1
  const commands = lines.slice(1, n + 1);

  // Crea un objeto vacío que representará package.json
  let packageJson = {};

  // Recorre cada comando del array commands
  for (const cmd of commands) {

    // Verifica si el comando actual es exactamente 'npm init -y'
    if (cmd === 'npm init -y') {

      // Agrega propiedad name al objeto
      packageJson.name = 'project';

      // Agrega propiedad version
      packageJson.version = '1.0.0';

      // Inicializa objeto dependencies vacío
      packageJson.dependencies = {};

      // Inicializa objeto scripts vacío
      packageJson.scripts = {};

    // Verifica si el comando actual es exactamente
    // 'npm install --save express'
    } else if (cmd === 'npm install --save express') {

      // Si dependencies no existe todavía, lo crea
      if (!packageJson.dependencies) {
        packageJson.dependencies = {};
      }

      // Agrega express dentro de dependencies
      // usando bracket notation
      packageJson.dependencies['express'] = '^4.17.1';

    // Verifica si el comando comienza con 'add script '
    // startsWith sirve para comparar solo el inicio del string
    } else if (cmd.startsWith('add script ')) {

      // Si scripts no existe todavía, lo crea
      if (!packageJson.scripts) {
        packageJson.scripts = {};
      }

      // Divide el comando en partes usando espacios
      // Ej:
      // "add script dev nodemon index.js"
      // =>
      // ["add", "script", "dev", "nodemon", "index.js"]
      const parts = cmd.split(' ');

      // Verifica que existan suficientes partes
      // para evitar errores
      if (parts.length >= 4) {

        // Obtiene el nombre del script
        // Ej: "dev"
        const scriptName = parts[2];

        // Obtiene el comando del script
        // slice(3) toma desde índice 3 hasta el final
        // join(' ') vuelve a unir el array en un string
        // Ej: "nodemon index.js"
        const scriptCmd = parts.slice(3).join(' ');

        // Agrega el script dinámicamente al objeto scripts
        packageJson.scripts[scriptName] = scriptCmd;
      }
    }

    // Otros comandos no hacen nada y se ignoran
  }

  // Convierte el objeto packageJson a JSON string
  // null => no usar replacer
  // 2 => indentación de 2 espacios
  console.log(JSON.stringify(packageJson, null, 2));
});