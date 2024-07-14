let arr = [
  [12, 45, 78, 23, 56, 89],
  [34, 67, 89, 45, 23, 90],
  [56, 78, 12, 34, 67, 45],
  [78, 12, 45, 67, 89, 23],
  [90, 34, 67, 12, 45, 78],
  [23, 56, 78, 90, 12, 34],
];
let n = 6,
  m = 6;
function goInZigZag(n, m, mat) {
  let ans = [];

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      for (let j = m - 1; j >= 0; j--) {
        ans.push(mat[i][j]);
      }
    } else {
      for (let j = 0; j < m; j++) {
        ans.push(mat[i][j]);
      }
    }
  }
  console.log(ans.join(" "));
}

goInZigZag(n, m, arr);
