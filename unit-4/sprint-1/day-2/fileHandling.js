const fs = require("fs");
const process = require("process");

// create new file (if file not found) and apend the txt
fs.appendFile("text.txt", "Hello node!\n", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

// user perameters in file
let perameters = process.argv.slice(2);

fs.appendFile("text.txt", `${perameters}\n`, (err) => {
  if (err) throw err;
  console.log("user file saved");
});



// fs.writeFile() method replaces the specified file and content:
// fs.writeFile("text.txt", `${perameters}\n`, (err) => {
//   if (err) throw err;
//   console.log("user file saved");
// });
