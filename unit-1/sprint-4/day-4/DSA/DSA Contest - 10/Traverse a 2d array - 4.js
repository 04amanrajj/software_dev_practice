let Matrix = [
  [1, 8, 9],
  [2, 7, 10],
  [3, 6, 11],
  [4, 5, 12],
];
let Row = 4;
let Colon = 3;

function traverse2dArray(N, M, matrix) {
  let bag = "";
  for (let i = M - 1; i >= 0; i--) {
    for (let j = N - 1; j >= 0; j--) {
      bag += matrix[j][i] + " ";
    }
  }
  console.log(bag);
}

traverse2dArray(Row, Colon, Matrix);
