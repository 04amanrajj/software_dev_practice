function getGreeting(firstname, lastname) {
  return `Hi from ${firstname} ${lastname}`;
}

let John = { name: "John", surename: "Smith", id: 1 };
let pete = { name: "pete", surename: "Hunt", id: 2 };
let mary = { name: "mary", surename: "philips", id: 3 };

let users = [John, pete, mary];

let usersGreeting = users.map((ele) => {
  return getGreeting(ele.name, ele.surename);
});

console.log(usersGreeting);
