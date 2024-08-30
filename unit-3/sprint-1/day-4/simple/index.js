import Person, { Teacher, Engineer } from "./class-4.live.js";

const person = new Person("John");
console.log(person.sayHello());

const teacher = new Teacher("Alice", "Math");
console.log(teacher.teach());

const engineer = new Engineer("Bob");
console.log(engineer.earn());
