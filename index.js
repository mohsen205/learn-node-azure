const http = require("node:http");

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  const data = JSON.stringify({ message: "Hello, world!" });
  response.end(data);
});

server.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});

// https://learn-node-azure.azurewebsites.net/
