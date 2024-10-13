const randomNumber = require("node:crypto");
const process = require("node:process");
console.log("random Number",randomNumber.randomInt(10, 200));
let perameters = process.argv.slice(2);

console.log({ perameters });

switch (perameters[0]) {
  case "add":
    console.log(+perameters[1] + +perameters[2]);
    break;

  case "sub":
    console.log(+perameters[1] - +perameters[2]);
    break;
  case "prodcut":
    console.log(+perameters[1] * +perameters[2]);
    break;
  case "devide":
    console.log(+perameters[1] / +perameters[2]);
    break;
  default:
    console.log("select from add,sub,prodcut,devide");
    break;
}
