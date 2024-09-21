//functions taking another function as arguments are higher order functions
let radius = [2, 4, 6, 8];

function areaa(radius) {
  return Math.PI * radius*radius;
}

function diameter(radius) {
  return 2 * radius;
}

function area(radius, logic) {
  let arr = [];
  for (let i = 0; i < radius.length; i++) {
    arr.push(logic(radius[i]));
  }
  return arr;
}

console.log(area(radius, areaa));
console.log(area(radius, diameter));
