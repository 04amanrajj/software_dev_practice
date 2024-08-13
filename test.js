function logic(n,arr) {

    let l=0,r=n-1
    while(l<r){
        let temp=arr[l]
        arr[l]=arr[r]
        arr[r]=temp
      
        l++,r--
    }
    let bag=''
    for(let i of arr){
        bag+=i+' '
    }
    console.log(bag)
}

function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;

    let [size] = input[line++].trim().split(" ").map(Number); // Read size, x, and y
    let arr = input[line++].trim().split(" ").map(Number); // Read the array

    logic(size,arr); 
  
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
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
