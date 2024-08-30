let subjectHash = {
  1: "JS",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};
let students = [
  { id: 1, name: "aman", subjectID: 5 },
  { id: 2, name: "loki", subjectID: 2 },
  { id: 3, name: "cj", subjectID: 4 },
  { id: 4, name: "niko", subjectID: 1 },
];
let newObj = students.reduce((acc, item) => {
  let id = item.id;
  let name = item.name;
  let subject = item.subjectID;
  let subjectName = subjectHash[subject];

  acc[name] = acc[name] || [];

  acc[name].push(subjectName);

  return acc;
}, {});

console.log(newObj);
