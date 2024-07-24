function logic(n, mat) {
  for (let i = 0; i < n; i++) {
    let bag = "";
    for (let j = 0; j < n; j++) {
      bag += mat[i][j] + 1 + " ";
    }
    console.log(bag);
  }
}

function runProgram(input) {
  input = input.split("\n");

  let length = input[0];
  let i = 0;
  let temp;
  while (length > 0 && i <= length) {
    let mat = [];
    for (let j = 0; j < length; j++) {
      temp = input[++i].split(" ").map(Number);
      mat.push(temp);
    }

    logic(length, mat);
    length--;
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
