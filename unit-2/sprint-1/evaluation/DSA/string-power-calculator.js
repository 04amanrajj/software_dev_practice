function eq(v, c) {
  console.log(3 * v + 5 * c);
}
function logic(n, str) {
  let v = 0,
    c = n;
  let vo = "aeiou";
  for (let i of vo) {
    for (let j of str) {
      if (i == j) v++;
    }
  }
  c = v - n;
  if (c < 0) c = n - v;
  eq(v, c);
}

function runProgram(input) {
  input = input.split("\n");

  let n = +input[0];
  let str = input[1];

  logic(n, str);
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
