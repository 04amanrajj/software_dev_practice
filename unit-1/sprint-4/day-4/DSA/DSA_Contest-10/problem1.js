let Matrix = [
  [1, 8, 9],
  [2, 7, 10],
  [3, 6, 11],
  [4, 5, 12],
];
let Row = 4;
let Colon = 3;

function traverse2dArray(N, M, arr) {
  let bag = "";
  for (let r = 0; r < M; r++) {
    for (let c = N - 1; c >= 0; c--) {
      bag += arr[c][r] + " ";
    }
  }
  console.log(bag);
}

traverse2dArray(Row, Colon, Matrix);
