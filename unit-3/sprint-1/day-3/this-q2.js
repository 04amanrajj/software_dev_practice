function sayHello() {
    console.log("Hello! ", this);
  }
  
  var john = {
    name: "John Doe",
    age: 30
  };
  
  var james = {
    name: "James Bond",
    age: 30
  };
  
  sayHello.call(james);
  sayHello.call(john);