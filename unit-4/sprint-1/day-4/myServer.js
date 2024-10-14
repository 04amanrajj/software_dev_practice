const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.end("this is home page");
  } else if (request.url == "/data") {
    fs.readFile("data.json", (err,data) => {
      if (err) {
        response.write(err);
        response.end();
      } else {
        response.end(data);
      }
    });
  } else response.end("404 not found");
});

server.listen(4500, () => {
  console.log(`server is running at http://localhost:4500/`);
});
