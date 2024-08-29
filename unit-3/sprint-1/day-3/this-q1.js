function sayHello() {
    console.log("Hello! from ", this.name);
  }
  
  var john = {
    name: "John Doe",
    age: 30,
    sayName: function () {
      // this.age = 35;
      console.log("My name is ", this.name);
    },
    sayHello: sayHello
  };
  
  var james = {
    name: "James Bond",
    age: 27,
    sayName: function () {
      console.log("My name is ", this.name);
    },
    sayHello: sayHello
  };
  
  john.sayName();
  john.sayHello();

  james.sayName();
  james.sayHello();