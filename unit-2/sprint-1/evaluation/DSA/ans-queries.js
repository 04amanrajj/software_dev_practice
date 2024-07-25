function logic(n, arr, qsize, qarr) {
  let obj = {};

  for (let i of arr) {
    obj[i] ? (obj[i] = 1) : (obj[i] = 1);
  }
  for (let i of qarr) {
    console.log(obj[i] ? "YES" : "NO");
  }
}

function runProgram(input) {
  input = input.split("\n");

  let n = +input[0];
  let i = 0;
  input[++i] = input[i].split(" ").map(Number);

  let arr = input[i];

  let qsize = +input[++i];

  input[++i] = input[i].split(" ").map(Number);

  let qarr = input[i];

  logic(n, arr, qsize, qarr);
}
if (process.env.USERNAME === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
