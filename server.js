const http = require("http");
const HOSTNAME = "localhost";
const PORT = 8900;

function requestHandler(req, res) {
  console.log(req);
  res.end("My name is Lamina Abdulquadri");
}

const server = http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, () => {
  console.log(`server started sucessfully at http ://${HOSTNAME}:${PORT}`);
});
