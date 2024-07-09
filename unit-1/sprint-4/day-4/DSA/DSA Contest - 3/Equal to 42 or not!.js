function equalTo42(size, arr) {
  let c = 0;
  for (let i = 0; i < size; i++) {
    if (arr[i] == 42) {
      c = 0;
      break;
    } else {
      c++;
    }
  }
  c !== 0 ? console.log("No") : console.log("Yes");
}
