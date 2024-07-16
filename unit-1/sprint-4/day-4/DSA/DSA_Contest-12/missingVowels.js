let str = "nature";
let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
let bag = "";

for (let key in obj) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === key) obj[key]++;
  }
  if (obj[key] == 0) bag += key;
}
bag == "" ? console.log(-1) : console.log(bag);
