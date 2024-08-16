let arr = [7, 5, 9, 4, 1];

let temp = 0;
for (let i = 0; i < arr.length - 1; i++) {
  let min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) min = j;
  }
  temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
  //   console.log(arr);
}
console.log(arr);