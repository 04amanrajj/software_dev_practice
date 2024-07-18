let input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

let obj = {};
let newArray = input.flat(Infinity);

let count = newArray.forEach((key) => (obj[key] ? obj[key]++ : (obj[key] = 1)));
console.log(obj);
