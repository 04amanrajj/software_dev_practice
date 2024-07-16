let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let prime = [];
let nonPrime = [];
let n = arr.length;
let m = arr.length;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    identifyPrime(arr[i][j]);
  }
}

function identifyPrime(num) {
  if (num < 2) {
    return;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      nonPrime.push(num);
      return;
    }
  }
  prime.push(num);
}

let Psum = prime.reduce((acc, cur) => acc + cur);
let NPsum = nonPrime.reduce((acc, cur) => acc + cur);

let ans = NPsum - Psum;
ans < 0 ? (ans = NPsum - Psum) : Psum - NPsum;

console.log(ans);
