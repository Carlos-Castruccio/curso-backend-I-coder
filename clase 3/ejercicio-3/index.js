/* 

Entrada: /
Salida: Bienvenido al servidor HTTP minimal

Entrada: /hash?text=NodeJS (query string con texto a hashear)
Salida: Hash de "NodeJS": 8c6976e5b5410415bde908bd4dee15dfb167a9 <hash_SHA256_de_NodeJS> 

*/

// Importa createServer del módulo nativo HTTP de Node
// Permite crear un servidor HTTP
import { createServer } from "http";

// Importa la clase URL del módulo url
// (tampoco se usa en este ejemplo)
import { URL } from "url";

// Importa todo el módulo crypto
// Se usa para generar hashes SHA256
import crypto from "crypto";

// Crea un servidor HTTP
// El callback se ejecuta cada vez que llega una request
const server = createServer((req, res) => {

  // Verifica si la ruta pedida es exactamente "/"
  if (req.url === "/") {

    // Muestra mensaje en consola
    console.log("Bienvenido al servidor HTTP minimal");

  // Verifica si la ruta comienza con "/hash"
  // startsWith permite aceptar rutas como:
  // /hash?text=NodeJS
  } else if (req.url.startsWith("/hash")) {

    // Divide la URL usando "?"
    // Ej:
    // "/hash?text=NodeJS"
    // =>
    // ["/hash", "text=NodeJS"]
    const queryString = req.url.split("?")[1];

    // Crea un parser de query params
    // Convierte:
    // "text=NodeJS"
    // en un objeto manipulable
    const params = new URLSearchParams(queryString);

    // Obtiene el valor del parámetro "text"
    // Resultado:
    // "NodeJS"
    const text = params.get("text");

    // Genera un hash SHA256 usando crypto
    const hash = crypto

      // Crea un objeto hash usando algoritmo SHA256
      .createHash("sha256")

      // Agrega el texto al hash
      .update(text)

      // Finaliza el hash y lo convierte a hexadecimal
      .digest("hex");

    // Muestra el resultado en consola
    console.log(`Hash de "${text}": ${hash}`);

  } else {

    // Si la ruta no coincide con ninguna anterior
    // cambia el status HTTP a 404
    res.statusCode = 404;

    // Muestra mensaje indicando ruta inválida
    console.log("Ruta no encontrada:", req.url);
  }
});

// Importa readline
// Sirve para leer líneas desde la terminal interactiva
import readline from "readline";

// Crea una interfaz readline
const rl = readline.createInterface({

  // stdin = entrada estándar (teclado)
  input: process.stdin,

  // stdout = salida estándar (consola)
  output: process.stdout,
});

// Escucha el evento "line"
// Se ejecuta cada vez que el usuario presiona Enter
rl.on("line", (line) => {

  // Simula un objeto request HTTP
  // trim() elimina espacios y saltos de línea
  const req = {
    url: line.trim(),
    method: "GET"
  };

  // Simula un objeto response HTTP
  const res = {

    // Variable interna para acumular datos
    _data: "",

    // Simula res.write()
    // Agrega contenido parcial al buffer
    write: function (chunk) {
      this._data += chunk;
    },

    // Simula res.end()
    // Finaliza la respuesta
    end: function (chunk) {

      // Si llega contenido final, lo agrega
      if (chunk) this._data += chunk;

      // Imprime toda la respuesta acumulada
      console.log(this._data);

      // Cierra readline
      // termina el programa
      rl.close();
    },

    // Código HTTP por defecto
    statusCode: 200,

    // Simula setHeader()
    // Está vacío porque no se usa en este ejercicio
    setHeader: function () {},
  };

  // Emite manualmente el evento "request"
  // Esto simula que llegó una request HTTP real
  server.emit("request", req, res);
});