let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let n = arr.length,
  bag = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i == 0) {
      if (i + j < n) {
        bag+=arr[i][j]+' ';
      }
    } else if (i == n - 1) {
      if (i + j >= 3) {
        bag+=arr[i][j]+' ';
      }
    } else {
      if (i + j == 3) {
        bag+=arr[i][j]+' ';
      }
    }
  }
}
console.log(bag)
