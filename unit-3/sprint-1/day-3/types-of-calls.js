function sayHello() {
  console.log("Hello! ", this.name);
}

sayHello.call({ name: "Aman" });

sayHello.apply({ name: "Aman" });

let nameoffun = sayHello.bind({ name: "Aman" });
nameoffun();
