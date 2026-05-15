/* Ejempo de entrada:
3
express 4.17.1
lodash 4.17.20
mongoose 5.10.0
2
express 4.17.1 4.18.0
lodash 4.17.20 4.17.21
true false

Salida:
Dependencia: express, Actual: 4.17.1, Propuesta: 4.18.0, Seguridad: Sí
Dependencia: lodash, Actual: 4.17.20, Propuesta: 4.17.21, Seguridad: No
*/


process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');

  // Leer número de dependencias actuales
  const N = parseInt(lines[0]);

  // Leer dependencias actuales
  const currentDeps = new Map(); //Disponible desde ES6, es una estructura de datos que almacena pares clave-valor, similar a un objeto pero con algunas diferencias importantes. Permite cualquier tipo de dato como clave, mantiene el orden de inserción y tiene métodos específicos para manipular los datos.
  for (let i = 1; i <= N; i++) {
    const [name, version] = lines[i].split(' ');
    currentDeps.set(name, version);
  }

  // Leer número de actualizaciones propuestas
  const M = parseInt(lines[N + 1]);

  // Leer actualizaciones propuestas
  const updates = [];
  for (let i = N + 2; i < N + 2 + M; i++) {
    const [name, currentVersion, proposedVersion] = lines[i].split(' ');
    updates.push({ name, currentVersion, proposedVersion });
  }

  // Leer indicadores de seguridad
  const securityFlags = lines[N + 2 + M].split(' ');
  console.log("Indicadores de seguridad recibidos:", securityFlags);

  // TODO: Implementar la lógica para imprimir las actualizaciones con formato
  for (const update of updates) {
    const isSecure = securityFlags[updates.indexOf(update)] === 'true' ? 'Sí' : 'No';
    console.log(`Dependencia: ${update.name}, Actual: ${update.currentVersion}, Propuesta: ${update.proposedVersion}, Seguridad: ${isSecure}`);
  }

});
