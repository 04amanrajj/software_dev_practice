// const arr = [1, -4, 12, 0, -3, 29, -150];

// let bag = "";

// arr.map(function (ele, index) {
//   bag += ele + " ";
// });

// console.log(bag);

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

let age = [];
input.map((element, index) => age.push(element.age));

let min = Math.min(...age);
let max = Math.max(...age);
let avg = max - min;

console.log({ age }, { min }, { avg });
