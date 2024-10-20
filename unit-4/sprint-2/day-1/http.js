const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  if (request.url == "/") response.end("Hi");
  else if (request.url == "/write" && request.method == "POST") {
    let str = "";
    request.on("data", (chunk) => {
      str += chunk;
    });
    request.on("end", () => {
      console.log(str);
    });
    response.end("added");
  } else if (request.url == "/data") {
    // let data = fs.readFileSync("./data.txt", "utf8");
    // response.end(data);

    const dataStream = fs.createReadStream("data.txt", "utf8");
    dataStream.pipe(response);
  } else response.end("404");

  console.log(request);
});

server.listen(3000);
