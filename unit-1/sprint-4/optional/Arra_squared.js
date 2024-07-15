const input = [1, 2, 3, 4, 5];

//output [1, 4, 9, 16, 25];

// Push
const arr = [];
let sq;
for (let i = 0; i < input.length; i++) {
  sq = input[i] * input[i];
  arr.push(sq);
}


// Annonmyos Fun
let power = input.map(function (num) {
  return Math.pow(num, 2);
});
// console.log(power);


//Arrow Head
let double = input.map((num) => Math.pow(num, 2));

console.log(double);
