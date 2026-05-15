const http = require('http');

const server = http.createServer((req, res) => {

  console.log("--------------------------------");
  console.log("Nueva petición recibida");
  console.log("Método:", req.method);
  console.log("URL:", req.url);

  // Ruta principal
  if(req.url === "/") {

    // Headers CORS
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end("Bienvenido al servidor");

  }

  // Ruta productos
  else if(req.url === "/products") {

    const productos = [
      { id: 1, nombre: "Coca Cola" },
      { id: 2, nombre: "Papas fritas" }
    ];

    res.statusCode = 200;

    // JSON
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(productos));

  }

  // Ruta inexistente
  else {

    res.statusCode = 404;

    res.setHeader('Content-Type', 'text/plain');

    res.end("Ruta no encontrada");

  }

});

server.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});