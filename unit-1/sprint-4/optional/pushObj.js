// let obj = {};

// people = [
//   {
//     name: "John",
//     age: 20,
//     city: "New York",
//   },
//   {
//     name: "Jane",
//     age: 25,
//     city: "Chicago",
//   },
// ];

// for(let i=0; i<people.length;i++){
//      let person=people[i]
//     obj[person.name]=person
// }

// console.log(obj);

let obj = {};

// function push(name, age, city) {
//   obj.name = name;
//   obj.age = age;
//   obj.city = city;
// }
// push("aman", 19, "earth");


obj.name='aman'
obj.age=19
obj.city="India"


for (const I in obj) {
  console.log(I + ":" + obj[I]);
}
