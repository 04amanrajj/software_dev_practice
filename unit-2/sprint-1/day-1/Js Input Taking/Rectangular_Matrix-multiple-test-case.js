function logic(n, m, mat) {
  for (let i = 0; i < n; i++) {
    let bag = "";
    for (let j = 0; j < m; j++) {
      bag += mat[i][j] + 1 + " ";
    }
    console.log(bag.trim());
  }
}

function runProgram(input) {
  input = input.split("\n");

  let tc = +input[0];

  let i = 0;

  while (tc) {
    input[++i] = input[i].trim().split(" ").map(Number);
    let n = input[i][0];
    let m = input[i][1];

    let mat = [];

    for (let j = 0; j < n; j++) {
      input[++i] = input[i].trim().split(" ").map(Number);
      mat.push(input[i]);
    }
    logic(n, m, mat);
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
