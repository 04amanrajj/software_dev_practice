let data = JSON.parse(localStorage.getItem("Vaccinated")) || [];

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

// filter

// Priority
let filter = document.getElementById("Priority");

filter.addEventListener("change", () => {
  let task = JSON.parse(localStorage.getItem("UserData"));

  if (filter.value == "") displayTable(task);
  else filterDataByPriority(filter.value, data);
});

function filterDataByPriority(priority, data) {
  let filteredData = data.filter((ele) => {
    return ele.priority == priority;
  });
  displayTable(filteredData);
}

//vaccine Filter
let filterVac = document.getElementById("vaccine");

filterVac.addEventListener("change", () => {
  let task = JSON.parse(localStorage.getItem("UserData"));
  if (filterVac.value == "") displayTable(task);
  else filterDataByVac(filterVac.value, data);
});

function filterDataByVac(vaccine, data) {
  let filteredData = data.filter((ele) => {
    return ele.vaccine == vaccine;
  });
  displayTable(filteredData);
}
// sort by age Filter

let filterAge = document.getElementById("Sage");
filterAge.addEventListener("change", () => {
  if (filterAge.value == "Low to High") {
    data.sort((a, b) => a.age - b.age);
  } else {
    data.sort((a, b) => b.age - a.age);
  }
  displayTable(data);
});

// sort by id

let filterID = document.getElementById("Sid");
filterID.addEventListener("change", () => {
  if (filterID.value == "Low to High") {
    data.sort((a, b) => a.id - b.id);
  } else {
    data.sort((a, b) => b.id - a.id);
  }
  displayTable(data);
});
displayTable(data)