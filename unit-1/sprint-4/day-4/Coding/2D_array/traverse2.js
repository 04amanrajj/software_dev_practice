//for traverse swap i and j position
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr.length; i++) {
  let bag = "";
  for (let j = 0; j < arr.length; j++) {
    bag += arr[j][i] + " ";
  }
  console.log(bag);
}
