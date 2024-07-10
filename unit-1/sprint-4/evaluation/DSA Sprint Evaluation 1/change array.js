function changeArr(N, A) {
  let bag = "",
    small = Infinity;
  for (let i = 0; i < N; i++) {
    if (small > A[i]) {
      small = A[i];
    }
  }

  for (let i = 0; i < N; i++) {
    if (A[i] % small == 0) {
      A[i] = -1;
    }
    bag += A[i] + " ";
  }
  console.log(bag);
}
