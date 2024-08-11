// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit", personData);
let dataArr = JSON.parse(localStorage.getItem("admission")) || [];

// storing data
function personData(event) {
  event.preventDefault();

  let personName = document.querySelector("#name").value;
  let personMail = document.querySelector("#email").value;
  let personPhone = document.querySelector("#phone").value;
  let personGender = document.querySelector("#gender").value;
  let personCourse = document.querySelector("#course").value;

  let data = {
    personName,
    personMail,
    personPhone,
    personGender,
    personCourse,
  };
  dataArr.push(data);
  localStorage.setItem("admission", JSON.stringify(dataArr));
}
