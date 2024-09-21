//functions taking another function as arguments are higher order functions
let radius = [2, 4, 6, 8];

function areaa(radius) {
  return Math.PI * radius * radius;
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

// console.log(area(radius, areaa));
// console.log(area(radius, diameter));

// -------------------MAP---------------------------------------------
{
  let arr = [4, 6, 3, 7, 2];

  let output = arr.map((x) => x * 2);

  // console.log(output);
}

// -------------------Filter---------------------------------------------

{
  let arr = [4, 1, 2, 4, 9, 8];

  let output = arr.filter((e) => e > 4);
  // console.log(output);
}

// -------------------Reduce---------------------------------------------
{
  let red = arr.reduce((acc, curr) => {
    if (acc > curr) acc = curr;
    return acc;
  });

  console.log(red);
}
