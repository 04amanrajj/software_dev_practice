function battleOfOddAndEven(n, arr) {
  let e = 0,
    o = 0;
  for (let i = 0; i < n; i++) {
    arr[i] % 2 == 0 ? (e += arr[i]) : (o += arr[i]);
  }
  e == o
    ? console.log("Even")
    : e > o
    ? console.log("Even")
    : console.log("Odd");
}
