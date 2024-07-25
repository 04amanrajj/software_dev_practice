function logic(n, k, arr) {
  let bag = "";
  for (let i of arr) {
    bag += i + k + " ";
  }
  console.log(bag);
}

function runProgram(input) {
  input = input.split("\n");

  let i = 0;
  let tc = +input[i];

  while (tc) {
    let line1 = input[++i].split(" ").map(Number);

    let n = line1[0];

    let k = line1[1];
    let arr = input[++i].split(" ").map(Number);

    logic(n, k, arr);
    tc--;
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
