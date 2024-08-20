let arr = [1, 2, 3, 4, 5];
let top=-1
let N=5


function push(data) {
  if (top == N-1) {
    console.log("Overflow");
    return;
  }
  top++;
  arr[top] = data;
}

function pop() {
  if (top == -1) {
    console.log("underflow");
    return;
  }
  console.log(arr[top]);
  top--;
}
function peek() {
  console.log(arr[top]);
}

push(13)
push(12)
push(10)
push(20)
push(18)
push(40)
console.log(arr)