const isEven = require("is-even");
const fs = require("fs");

let x = isEven(59);

// console.log(x)

// read
fs.readFile("./cli.txt", { encoding: "utf-8" }, (err, res) => {
  //   console.log("async",err ? "Data is not readed" : res);
}); //async

let data;
try {
  data = fs.readFileSync("./cli.txt", { encoding: "utf-8" }); //sync
} catch (error) {
  //   console.log(error);
}

// console.log("sync",data);

// write/replace/create

fs.writeFile("newtext.txt", "this is created using async fs write", (err) => {
  //async
  if (err) {
    console.log("data cannot be written", err);
  } else {
    console.log("data created using write");
  }
});

try {
  fs.writeFileSync("new.txt", "this is my 1st file"); //sync
  console.log("data created using write sync");
} catch (error) {
  console.log(error);
}

// append lines
fs.appendFile("cli.txt", "\nthis data written by async append", (err) => {
  if (err) {
    console.log("data cannot be append", err);
  } else {
    console.log("data appended");
  }
});

try {
  fs.appendFileSync("cli.txt", "\nthis data is written by append file sync");
  console.log("data appended using sync method");
} catch (err) {
  console.log("Data cannot be appended using sync", err);
}
