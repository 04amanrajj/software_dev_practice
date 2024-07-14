function detectPalindrome(num) {
  let r = "";
  let a = num.toString();
  for (let i = a.length - 1; i >= 0; i--) {
    r += a[i];
  }
  r == num ? console.log("Yes") : console.log("No");
}
