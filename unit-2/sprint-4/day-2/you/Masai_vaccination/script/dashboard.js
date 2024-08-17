let data = JSON.parse(localStorage.getItem("UserData")) || [];
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
    td7.textContent = temp = randomNumber();
    row.append(td7);

    let td8 = document.createElement("td");
    td8.textContent = "Remove";
    td8.style.backgroundColor = "#dc3545";
    td8.style.color = "white";
    td8.style.cursor = "pointer";
    td8.addEventListener("click", () => remove(i));
    row.append(td8);

    let td9 = document.createElement("td");
    td9.textContent = element.id;
    td9.textContent = "Vaccinate";
    td9.style.backgroundColor = "#28a745";
    td9.style.color = "white";
    td9.style.cursor = "pointer";
    td9.addEventListener("click", () => vaccinate(element, i, temp));
    row.append(td9);

    document.querySelector("tbody").append(row);
  });
}

// remove funtion
function remove(i) {
  let arr = JSON.parse(localStorage.getItem("UserData")) || [];
  arr.splice(i, 1);
  localStorage.setItem("UserData", JSON.stringify(arr));
  displayTable(arr);
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

// vaccinated button (Promise)
function vaccinate(element,i,temp) {
  let person = prompt("Enter OTP");
  let Pakka = new Promise((res, rej) => {
    if (person == temp) {
      res(element.name + " Added to Queue");
    } else rej("OTP Incorrect");
  });

  Pakka.then((res) => {
    alert(res);
    setTimeout(() => {
      alert("Vaccinating " + element.vaccine);
      setTimeout(() => {
        alert(element.name + " Vaccinated");
        let done = JSON.parse(localStorage.getItem("Vaccinated")) || [];
        element.otp=temp
        done.push(element);
        localStorage.setItem("Vaccinated", JSON.stringify(done));
        remove(i)
      }, 5000);
    }, 2000);
  }).catch((rej) => alert(rej));
}
// initial call
displayTable(data);
