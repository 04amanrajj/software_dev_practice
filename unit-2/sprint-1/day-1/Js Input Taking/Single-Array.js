function logic(n,str){
    str=str.split(' ').map(Number)
    let bag='' 
    for(let i of str){
        bag+=i+1+' '
    }
    console.log(bag)
}

function runProgram(input) {
    input = input.trim().split('\n');
    
    let n=input[0]
    
    logic(n,input[1])

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
