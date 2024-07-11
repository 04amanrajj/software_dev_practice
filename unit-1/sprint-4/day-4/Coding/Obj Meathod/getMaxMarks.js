let data = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] },
    ],
  },

  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] },
    ],
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] },
    ],
  },
];

function Result(obj) {
    // let obj=data
  let arr = obj.students;
  let max_marks = -Infinity;
  let topper;
  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];
    let total = person.marks[0] + person.marks[1] + person.marks[2];

    if (max_marks < total) {
      max_marks = total;
      topper = person.name;
    }
  }
  console.log(obj.grade + "-" + topper + "-" + max_marks);
}

for (let i = 0; i < data.length; i++) {
  Result(data[i]);
}
