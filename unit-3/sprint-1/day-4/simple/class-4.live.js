// class-4.live.js

class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      return this.name + " the Person, says Hello";
    }
  }
  
  class Teacher extends Person {
    constructor(name, subject) {
      super(name);
      this.subject = subject;
    }
  
    teach() {
      return this.name + " the Teacher, teaches " + this.subject;
    }
  }
  
  class Engineer extends Person {
    constructor(name) {
      super(name);
    }
  
    earn() {
      return this.name + " the Engineer, makes money.";
    }
  }
  
  // named exports
  export { Teacher, Engineer };
  
  // default export
  export default Person;
  