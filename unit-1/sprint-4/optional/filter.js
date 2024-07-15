//Filter
const input = [1, -4, 12, 0, -3, 29, -150];

let newArr = input.filter(function (ele, index) {
  return ele > 0;
});

console.log(newArr)
