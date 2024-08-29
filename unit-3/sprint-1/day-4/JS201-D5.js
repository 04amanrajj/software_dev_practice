function human() {
  this.name = "Will Smith";
  this.age = 54;
}

function Actor(movieName) {
  name = human.call(this);
  // age = human.call(this.age);

  // call human function here in such a way that
  // the `this` object inside of the this function Actor
  // gets name and age (everything that was sticked to this of the function human)
}

let a1 = new Actor("Aladdin");
console.log(a1.name); // should return Will Smith
console.log(a1.age); // should return 54
