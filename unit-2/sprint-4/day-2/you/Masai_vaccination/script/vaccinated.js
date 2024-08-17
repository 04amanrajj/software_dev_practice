let data = JSON.parse(localStorage.getItem("Vaccinated")) || [];
function randomNumber() {
  return Math.floor(1000 + Math.random() * 9000);
}

function displayTable(data) {
  document.querySelector("tbody").innerHTML = "";
  data.forEach((element, i) => {
    let row = document.createElement("tr");
    let temp = 0;
    let td1 = document.createElement("td");
    td1.textContent = element.id;
    row.append(td1);

    let td2 = document.createElement("td");
    td2.textContent = element.name;
    row.append(td2);

    let td3 = document.createElement("td");
    td3.textContent = element.age;
    row.append(td3);

    let td4 = document.createElement("td");
    td4.textContent = element.work;
    row.append(td4);

    let td5 = document.createElement("td");
    td5.textContent = element.priority;
    row.append(td5);

    let td6 = document.createElement("td");
    td6.textContent = element.vaccine;
    row.append(td6);

    let td7 = document.createElement("td");
    td7.textContent = element.otp;
    row.append(td7);

    document.querySelector("tbody").append(row);
  });
}

displayTable(data)