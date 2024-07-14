let arr = [
  [12, 45, 78, 23, 56, 89],
  [34, 67, 89, 45, 23, 90],
  [56, 78, 12, 34, 67, 45],
  [78, 12, 45, 67, 89, 23],
  [90, 34, 67, 12, 45, 78],
  [23, 56, 78, 90, 12, 34],
];
let N = 6,
  M = 6;

function evenSumRows(N, M, arr) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2 == 0) {
        sum += arr[i][j];
      }
    }
    console.log(sum);
  }
}

evenSumRows(N, M, arr);
