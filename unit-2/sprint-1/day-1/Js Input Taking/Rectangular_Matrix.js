function logic(n,m,mat) {
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
    let i=0
    let length=input[i++].split(' ').map(Number)
    let n=length[0]
    let m=length[1]
    
    let mat=[]
    
  //   console.log(n,m)
     for(let j=0;j<n;j++){
        mat.push(input[i++].split(' ').map(Number))
      
         
     }
     logic(n,m,mat)
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
  