function Account(name, type, balance, isActive) {
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.isActive;
  this.print = function () {
    console.log(
      "Name:",
      name,
      "Type:",
      type,
      "Balance:",
      balance,
      "isActive:",
      isActive
    );
  };
}

const acc = new Account("Aman", "Current", "20k", "Active");
console.log(acc.constructor); //Used object name
acc.print();

let obj = {
  name: "aman",
  fav: "js",
};

console.log(obj.constructor); //Object
