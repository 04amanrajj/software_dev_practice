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

// Problem 2

/**
 * Create a class called Animal
 * the object created using Animal class is expected to have the following properties:
 * - name: the value will be passed while calling Animal with the new keyword
 * 
 * the object is expected to have following methods
 * - run(): console logs '<name of the animal> is running'
 * - stop(): console logs '<name of the animal> has stopped' 
 * 
 * extend Animal to create a Rabbit class
 * - The object created using Rabbit class has a name, it can run & it can stop
 * - it also has a method called hide which console logs '<name of the animal> has hidden'
 */
class Animal{
  constructor(name){
    this.name=name
  }
  run(){console.log(this.name,"is running")}
  stop(){console.log(this.name,"is stopped")}
}

class Rabbit extends Animal{
  constructor(name){
    super(name)
  }
  hide(){console.log(this.name,"has hidden")}
}

let r1 = new Rabbit('Ruby');
r1.hide() // Ruby has hidden
r1.run() // Ruby is running
