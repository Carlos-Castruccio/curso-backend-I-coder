const http = require("http");

const server = http.createServer((req, res) => {
  // Headers CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola desde Node.js!");
});

server.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});
