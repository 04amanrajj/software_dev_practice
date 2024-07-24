function logic(size, str) {
    console.log(str)
}

function runProgram(input) {
  input = input.split("\n");
  let i=0
  let tc = +input[i++]
  
  while(tc>0){
      let line= +input[i++]
    let str=''
    str+= input[i++]
  
    logic(line,str)
    tc--
  }
  
//   console.log(str)
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
