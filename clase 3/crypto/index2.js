const crypto = require('crypto');

// Texto original
const password = "miPassword123";

console.log("Password original:");
console.log(password);

console.log("--------------------------------");

// Creamos hash SHA256
const hash = crypto
  .createHash('sha256')
  .update(password)
  .digest('hex');

console.log("Hash generado:");
console.log(hash);

console.log("--------------------------------");

// Simulamos login
const intentoLogin = "miPassword123";

// Generamos hash del intento
const intentoHash = crypto
  .createHash('sha256')
  .update(intentoLogin)
  .digest('hex');

console.log("Hash del intento:");
console.log(intentoHash);

console.log("--------------------------------");

// Comparación
if(hash === intentoHash){
  console.log("Password correcta");
}else{
  console.log("Password incorrecta");
}