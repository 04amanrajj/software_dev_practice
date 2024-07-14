let arr = [
  [2, 3, 4],
  [6, 5, 2],
  [1, 8, 7],
];

let N = arr[0].length;
let M = arr.length;
function evenSumColumns(N, M, arr) {
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < M; j++) {
      if (arr[j][i] % 2 === 0) {
        sum += arr[j][i];
      }
    }
    console.log(sum);
  }
}
