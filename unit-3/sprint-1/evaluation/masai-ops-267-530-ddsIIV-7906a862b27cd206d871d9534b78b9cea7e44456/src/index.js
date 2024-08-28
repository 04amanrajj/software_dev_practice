function studentData(firstName, lastName, age, marks, a, b, c) {
  let obj = {
    fullname: `${firstName} ${lastName}`,
    age,
    hobbies: `${a} ${b} ${c}`,
    getInfo() {
      return `${firstName} ${lastName}'s age is ${age}`;
    },
    getResult() {
      return marks[0] >= 50 && marks[1] >= 50 && marks[2] >= 50
        ? "PASS"
        : "FAIL";
    },
  };
  return obj;
}
export {studentData}

