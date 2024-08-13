function runProgram(input) {
  input = input.trim().split("\n");
  
  let line = 0;
  let tc = +input[line++];
  
  for (let i = 0; i < tc; i++) {
    let size = +input[line++];
    let arr = input[line++].split(' ').map(Number);
    logic(size, arr);
  }
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
