function pallindrome(n, str) {
  let obj = {};
  for (let s of str) {
    obj[s] ? obj[s]++ : (obj[s] = 1);
  }
  let odd = 0;

  for (let key in obj) {
    if (obj[key] % 2 !== 0) odd++;
  }
  console.log(odd > 1 ? "Not Possible!" : "Possible!");
}
