let arr1 = [1, 3, 4],
  arr2 = [2, 0, 5];

let arr = [...arr1, ...arr2];
arr.sort(function(a,b){return a-b})
console.log(arr);