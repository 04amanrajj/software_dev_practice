let arr = [4, 1, 3, 2, 5];
let stack = []
let ans = []

for (let i = 0; i < arr.length; i++) {
  while (stack.length != 0 && stack[stack.length - 1] > arr[i]) {
    stack.pop();
  }
  if (stack.length == 0) stack.push(-1);
  else {
    ans.push(stack[stack.length - 1]);
  }

  stack.push(arr[i]);
}
console.log(ans);
