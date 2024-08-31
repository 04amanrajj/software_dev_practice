let subjectsData = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "HTML" },
  { id: 3, name: "CSS" },
  { id: 4, name: "Java" },
  { id: 5, name: "Rust" },
];

// code your key-value object for subjects here

let students = [
  { id: 1, name: "Prateek", subjectID: 5 },
  { id: 2, name: "Yogesh", subjectID: 2 },
  { id: 3, name: "Nrupul", subjectID: 4 },
  { id: 4, name: "Prateek", subjectID: 1 },
];

let newObj = students.reduce((acc, item) => {
  let name = item.name;
  let subjectID = item.subjectID;
  // let subname=

  acc[name] = acc[name] || [];
  for (let i = 0; i < subjectsData.length; i++) {
    if (subjectID == subjectsData[i].id) acc[name].push(subjectsData[i].name);
  }

  return acc;
}, {});

console.log(newObj);

/* 
  ----------------------------------
  create a new object called `newObj` using the `students` array &  
  the `subjectsData` array.
  
  Hint: consider creating an extra key-value object for quickly accessing subject names
  ----------------------------------
  
  Expected Output of `newObj`: 
  {
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
  }
  */

export { newObj };
