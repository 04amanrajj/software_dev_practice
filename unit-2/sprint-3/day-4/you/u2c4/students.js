// All the Code for All Students Page Goes Here

let dataArr = JSON.parse(localStorage.getItem("admission")) || [];

dataArr.forEach((element, i) => {
  let row = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.textContent = element.personName;
  row.append(td1);

  let td2 = document.createElement("td");
  td2.textContent = element.personMail;
  row.append(td2);

  let td3 = document.createElement("td");
  td3.textContent = element.personCourse;
  row.append(td3);

  let td4 = document.createElement("td");
  td4.textContent = element.personGender;
  row.append(td4);

  let td5 = document.createElement("td");
  td5.textContent = element.personPhone;
  row.append(td5);

  let td6 = document.createElement("td");
  td6.textContent = "Accept";
  td6.addEventListener("click", function () {
    accepted(
      element.personName,
      element.personMail,
      element.personCourse,
      element.personGender,
      element.personPhone,
      i
    );
  });
  td6.style.backgroundColor="green"
  row.append(td6);

  let td7 = document.createElement("td");
  td7.textContent = "Reject";
  td7.addEventListener("click", function () {
    rejected(
      element.personName,
      element.personMail,
      element.personCourse,
      element.personGender,
      element.personPhone,
      i
    );
  });
  td7.style.backgroundColor="red"
  row.append(td7);

  document.querySelector("tbody").append(row);
});

// funtion to move to accepted list
function accepted(
  personName,
  personMail,
  personCourse,
  personGender,
  personPhone,
  i
) {
  let arr = JSON.parse(localStorage.getItem("admission-accepted")) || [];
  let obj = {
    personName,
    personMail,
    personCourse,
    personGender,
    personPhone,
    i,
  };

  arr.push(obj);
  localStorage.setItem("admission-accepted", JSON.stringify(arr));

  let arr2 = JSON.parse(localStorage.getItem("admission"));
  arr2.splice(i, 1);

  localStorage.setItem("admission", JSON.stringify(arr2));
}

// funtion to move to rejected list
function rejected(
  personName,
  personMail,
  personCourse,
  personGender,
  personPhone,
  i
) {
  let arr = JSON.parse(localStorage.getItem("admission-rejected")) || [];
  let obj = {
    personName,
    personMail,
    personCourse,
    personGender,
    personPhone,
    i,
  };

  arr.push(obj);
  localStorage.setItem("admission-rejected", JSON.stringify(arr));

  let arr2 = JSON.parse(localStorage.getItem("admission"));
  arr2.splice(i, 1);

  localStorage.setItem("admission", JSON.stringify(arr2));
}
