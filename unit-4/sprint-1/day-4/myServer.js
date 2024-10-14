const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.setHeader("Content-Type", "text/html");
    response.end(`
      <ul style="display:flex;padding:10px">
        <li style="margin:10px"><a href="#">/home</li>
        <li style="margin:10px"><a href="/data">/data</li>
        <li style="margin:10px"><a href="/report">/report</li>
      </ul>
      `);
  } else if (request.url == "/data") {
    fs.readFile("data.json", (err, data) => {
      if (err) {
        response.write(err);
        response.end();
      } else {
        response.end(data);
      }
    });
  } else if (request.url == "/reports") {
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Nothing to report</h1>");
  } else response.end("404 not found");
});

server.listen(4500, () => {
  console.log(`server is running at http://localhost:4500/`);
});
