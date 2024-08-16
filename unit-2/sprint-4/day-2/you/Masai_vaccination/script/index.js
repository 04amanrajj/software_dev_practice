let form = document.querySelector("form");
form.addEventListener("submit", displayData);

let data = JSON.parse(localStorage.getItem("UserData")) || [];

function displayData(event) {
  event.preventDefault();

  let obj = {
    id: form.id.value,
    name: form.name.value,
    age: form.age.value,
    work: form.status.value,
    priority: form.Priority.value,
    vaccine: form.vaccine.value,
  };
  let idexist = data.some((element) => element.id == obj.id);

  if (idexist) {
    alert("Id Not avaliable");
  } else {
    data.push(obj);
    localStorage.setItem("UserData", JSON.stringify(data));
  }
}
