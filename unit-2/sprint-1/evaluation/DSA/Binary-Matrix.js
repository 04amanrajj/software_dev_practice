function binaryMatrix(N, M, mat) {
  for (let i = 0; i < N; i++) {
    let bag = "";
    for (let j = 0; j < M; j++) {
      mat[i][j] === 0 ? (mat[i][j] = 1) : (mat[i][j] = 0);

      bag += mat[i][j] + " ";
    }
    console.log(bag);
  }
}
