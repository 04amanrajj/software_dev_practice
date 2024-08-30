let John = { name: "John", surename: "Smith", id: 1 };
let pete = { name: "pete", surename: "Hunt", id: 2 };
let mary = { name: "mary", surename: "philips", id: 3 };

let users = [John, pete, mary];

let userMapped = users.map((ele) => {
  let obj = {};
  obj.fullname = ele.name + " " + ele.surename;
  obj.id = ele.id;
  return obj;
});
console.log(userMapped);
console.log(userMapped[0].id);
console.log(userMapped[0].fullname);
