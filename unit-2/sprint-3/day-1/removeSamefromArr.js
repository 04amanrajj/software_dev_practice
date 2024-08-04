let arr1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5];

let obj = {};
let arr3 = [];
// for (let i of arr1) {
//   obj[i] ? obj[i]++ : (obj[i] = 1);
// }
// for (let key in obj) {
//   arr3.push(key);
// }
// console.log(arr3);

function removeSame(arr, n) {
  if (n == 0 || n == 1) return n;

  let j = 0;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      arr[j] = arr[i];
      j++
    }
  }
  arr[j] = arr[n - 1];
  j++
  return arr.slice(0,j)
}

let x = removeSame(arr1, arr1.length);
console.log(x);
