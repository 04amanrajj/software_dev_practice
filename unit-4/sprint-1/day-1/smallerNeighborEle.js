let arr = [39, 27, 11, 4, 24, 32, 32, 1];
let s = [];
let ans = [];
for (let i of arr) {
  while (s.length != 0 && s[s.length - 1] >= i) {
    s.pop();
  }
  if (s.length == 0) ans.push(-1);
  else ans.push(s[s.length - 1]);
  s.push(i);
}
console.log(ans);


