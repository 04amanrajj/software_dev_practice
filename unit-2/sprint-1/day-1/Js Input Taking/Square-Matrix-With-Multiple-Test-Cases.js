function logic(n,mat) {
    for (let i = 0; i < n; i++) {
      let bag = "";
      for (let j = 0; j < n; j++) {
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
      
      let n = +input[++i];
  
      let mat = [];
      
      for (let j = 0; j < n; j++) {
        input[++i] = input[i].trim().split(" ").map(Number);
        mat.push(input[i]);
      }
      logic(n, mat);
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
  
