function factorial(n) {
  //   let res = n;
  //   for (let i = n-1; i > 0; i--) {
  //     res*=i
  //     console.log(i)
  //   }
  //   return res
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(4));

// loop with function
function print(n, i) {
  if (n == i) return;
  console.log(i);
  print(n, i + 1);
}
print(5,0)
