let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let bag = "";

for (let i = 0; i < arr.length; i++) {
  bag = "";
  for (let j = 0; j < arr.length; j++) {
    bag += arr[i][j] + " ";
  }
  console.log(bag);
}
