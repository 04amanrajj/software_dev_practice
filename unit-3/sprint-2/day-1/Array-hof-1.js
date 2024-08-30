let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Marry" },
];

let newArr = users.reduce((acc, item) => {
  let name = item.name;
  let id = item.name;

  acc[name] = id;

  return acc;
}, {});
console.log(newArr);
