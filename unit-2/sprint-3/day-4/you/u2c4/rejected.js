// All the Code for the Rejected page goes here
let rejected = JSON.parse(localStorage.getItem("admission-rejected")) || [];

rejected.forEach(element => {
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

  document.querySelector("tbody").append(row);

});