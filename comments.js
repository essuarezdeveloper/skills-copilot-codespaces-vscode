// Crear servidor web y escuchar en el puerto 3000 para solicitudes entrantes y responder con un mensaje "Hello World"
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
