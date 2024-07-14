//for traverse swap i and j position
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//if rectangle matrix use arr[i].length

let bag = "";

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    bag = "";
    bag += arr[i][j];
    console.log(bag);
  }
}
