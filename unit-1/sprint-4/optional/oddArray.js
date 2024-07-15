let arr = [1, 2, 3, 4, 5];

// find and sum odd elements


let odd = arr.filter(function (element, index) {
 
  return  element % 2 != 0
});
console.log(odd);


// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function (Element) {
//   if (Element % 2 != 0) sum += Element;
// });

// console.log(sum);