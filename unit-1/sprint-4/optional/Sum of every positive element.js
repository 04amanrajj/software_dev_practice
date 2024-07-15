const input = [1, -4, 12, 0, -3, 29, -150];
//42

// old

// let old = function (arr) {
//   let sum = 0;
//   for (let i in arr) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   console.log(sum);
// };
// old(input);

//Filter 
let newArr = input.filter(function (ele, index) {
  return ele>0
});



console.log(newArr);
