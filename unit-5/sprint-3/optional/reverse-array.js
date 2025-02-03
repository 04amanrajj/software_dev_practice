let arr = [1, 2, 3, 4, 5, 6, 7];

console.log("Print array method 1 >>>>>>>>>>>>>>>>>.");
function print(arr) {
  if (arr.length == 0) return;
  console.log(arr[0]);
  print(arr.slice(1));
}
print(arr);

// index based
console.log("Print array method 2 >>>>>>>>>>>>>>>>>.");

function printArr(arr, i) {
  if (i >= arr.length) return;
  console.log(arr[i]);
  printArr(arr, i + 1);
}
printArr(arr, 0);

console.log("Print array method 3 >>>>>>>>>>>>>>>>>.");

function printR(arr, i) {
  if (i < 0) return;
  console.log(arr[i]);
  printR(arr, i - 1);
}
printR(arr, arr.length - 1);
