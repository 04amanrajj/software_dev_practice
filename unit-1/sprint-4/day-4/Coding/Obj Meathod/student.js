// function addstudent(data) {
//   let students = [];

//   for (let i = 0; i < data.length; i++) {
//     let student = {};
//     student.name = data[i].name;
//     student.marks = {};
//     for (let j = 0; j < data[i].subjecs.length; j++) {
//       let subjecs = data[i].subjecs[j].subjecname;
//       let marks = data[i].subjecs[j].marks;
//       student.marks[subjecs] = marks;
//     }
//     students.push(student);
//   }
//   return students;
//}

let object = {
  arr: [],
  details: function (name, age, coding, dsa, html) {
    let obj = {};

    obj.name = name;
    obj.age = age;
    obj.coding = coding;
    obj.dsa = dsa;
    obj.html = html;
    this.arr.push(obj);
  },
  max: function () {
    let max = -Infinity;
    let topper = "";
    for (let item of this.arr) {
      //what is item
      let sum = item.coding + item.dsa + item.html;
      if (sum > max) {
        max = sum;
        topper = item.name;
      }
    }
    console.log(topper, max);
  },
  lowest: function () {
    let min = Infinity;
    let lower = "";
    for (let item of this.arr) {
      let sum = item.coding + item.dsa + item.html;
      if (sum < min) {
        min = sum;
        lower = item.name;
      }
    }
    console.log(lower, min);
  },
};

object.details('Aman',19,54,32,65)
object.details('Rahul',20,45,32,65)
object.details('hul',21,43,37,25)
object.lowest()
object.max()