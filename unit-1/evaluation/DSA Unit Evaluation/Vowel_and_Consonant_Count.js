function vowelAndConsonantCount(N, str) {
  let vowel = ["a", "e", "i", "o", "u"];
  let v = 0;
  for (let j = 0; j < N; j++) {
    for (let i of vowel) {
      if (str[j] == i) v++;
    }
  }
  console.log(v, N - v);
}
