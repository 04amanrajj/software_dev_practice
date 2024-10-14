// ----------import from node
const http = require("http");
const fs = require("fs");
const cowsay = require("cowsay");
const dns = require("dns");
const process = require("process");
// ----------server creation code
const server = http.createServer((request, response) => {
  //homepage
  if (request.url == "/") {
    response.setHeader("Content-Type", "text/html");
    response.end(`<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>
    <ul>
        <li><a href="/writeinfile">/create File</li>
        <li><a href="/enternames">/fill data</li>
        <li><a href="/alldetails">/display data</li>
        <li><a href="/delete">/delete file</li>
    </ul>`);
  }
  // Create text file
  else if (request.url == "/writeinfile") {
    response.setHeader("Content-Type", "text/html");
    fs.writeFile("employee.txt", "Employee names are as follows:\n", (err) => {
      if (err) {
        console.log("File could not be written ", err);
      } else {
        response.write(`<h1>Data has been written in the file</h1>`);
      }
      response.end();
    });
  }
  // Fill data in text file
  else if (request.url == "/enternames") {
    let people = ["Aman", "Albert", "Varun", "Rajat", "Nrupul"];
    for (let person of people) {
      fs.appendFile("employee.txt", `${person}\n`, (err) => {
        if (err) {
          console.log("people can't be added to list ", err);
        } else {
          response.write("<h1>All the names added in the file</h1>");
        }
        response.end();
      });
    }
  }
  //display names
  else if (request.url == "/alldetails") {
    fs.readFile("employee.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log("can't read data ", err);
      } else {
        response.write(`${cowsay.say({ text: data })}`);
      }
      response.end();
    });
  }
  // delete page
  else if (request.url == "/delete") {
    fs.unlink("employee.txt", (err) => {
      if (err) {
        console.log("can't delete the file ", err);
      } else {
        response.write("<h1>File has been deleted</h1>");
      }
      response.end("404 not found");
    });
  }
});

server.listen(4400, () => {
  console.log("Server is running at http://localhost:4400");
});

// getting ip address from url
let url = process.argv.slice(2);
dns.lookup(url.toString(), (err, address) => {
  if (err) {
    console.log("send a url to get ip address");
  } else {
    console.log("address: ", address);
  }
});
