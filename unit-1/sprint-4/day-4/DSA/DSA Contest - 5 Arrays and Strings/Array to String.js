function arrayToStr(N, arr) {
  let s = "";
  for (let i = 0; i < N; i++) {
    arr[i] <= 0 ? (s += 0) : (s += arr[i]);
  }
  console.log(s);
}
