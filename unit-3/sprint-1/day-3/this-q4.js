var john = { name: "John Doe", age: 25 };

var sayArrowHello = () => {
  console.log("Arrow Hello ", this);
};

function sayRegularHello() {
  console.log("Regular Hello ", this);
}

function sayRegularName() {
  console.log("My Regular name is ", this.name, this); 
  sayRegularHello();
  sayArrowHello();
  var sayArrowGoodBye = () => {
    console.log("Arrow GoodBye ", this); 
  };
  sayArrowGoodBye();
}

sayRegularName.call(john);