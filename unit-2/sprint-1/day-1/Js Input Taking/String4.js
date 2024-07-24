//Enter code here
function logic(str) {
    console.log(str)
  }
  
  function runProgram(input) {
    input = input.split("\n");
    tc=+input[0]
    let i=0
  //   console.log(input)
    while(tc>0){
      
      // input=input[++i]
      
      logic(input[++i])
      
      tc--
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
  