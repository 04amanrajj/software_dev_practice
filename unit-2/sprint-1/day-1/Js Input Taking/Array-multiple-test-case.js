function logic(n,arr){
    let bag=''
    for(let i of arr){
        bag+=i+1+' '
    }
    console.log(bag)
    
}

function runProgram(input) {
    input = input.trim().split('\n');
    
    let tc=+input[0]
    let i=0
    
    while(tc){
        let size =input[++i]
        let arr=input[++i].split(' ').map(Number)
        logic(size,arr)
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
