function smallerThanLargest(N, A) {
  let max = Math.max(...A),
    bag = "";
  for (let s of A) {
    if (s !== max) s = -1;

    bag += s + " ";
  }
  console.log(bag);
}
