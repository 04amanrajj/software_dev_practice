const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let N = 3,
  d1 = 0,
  d2 = 0,
  a = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i - j == 0) d1 += mat[i][j];

    if (i + j == N - 1) d2 += mat[i][j];

    if (i + j == N - 1 && i - j == 0) a += mat[i][j];
  }
}
let sum = d1 + d2 - a;
console.log(sum % 2 === 0 ? "yes" : "no");
