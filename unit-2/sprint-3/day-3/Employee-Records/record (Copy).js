let form = document.querySelector("form");
form.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();

  let objData = {
    name: form.name.value,
    empID: form.employeeID.value,
    department: form.department.value,
    xp: form.exp.value,
    mail: form.email.value,
    mobile: form.mbl.value,
  };

  displayData(objData);
}

function displayData(Data) {
  let row = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.textContent = Data.name;
  if (td1.textContent == "") return alert("Please fill the Name");

  let td2 = document.createElement("td");
  td2.textContent = Data.empID;
  if (td2.textContent == "") return alert("Please fill the EmployeeID");

  let td3 = document.createElement("td");
  td3.textContent = Data.department;
  if (td3.textContent == "") return alert("Please select Department");

  let td4 = document.createElement("td");
  td4.textContent = Data.xp;
  // if(td4.textContent=='') return alert("Please fill exp Name")

  let td5 = document.createElement("td");
  td5.textContent = Data.mail;
  if (td5.textContent == "") return alert("Please fill Email");

  let td6 = document.createElement("td");
  td6.textContent = Data.mobile;
  if (td6.textContent == "") return alert("Please fill Mobile");

  let td7 = document.createElement("td");
  td7.textContent = role(Data.xp);

  let td8 = document.createElement("td");
  td8.textContent = "Delete";
  td8.style.backgroundColor = "red";
  td8.addEventListener("click", () => {
    // this make row empty
    row.innerHTML = "";
  });

  // appending data to row then to tbody
  row.append(td1, td2, td3, td4, td5, td6, td7, td8);
  document.querySelector("tbody").append(row);

  filter(Data.department);
}

// funtion to get role
function role(xp) {
  if (xp > 5) return "Senior";
  else if (xp < 5 && xp > 2) return "Junior";
  else return "Fresher";
}

// code to add selector in department column
function choice() {
  let select = document.createElement("select");

  let department = [
    "All Department",
    "Frontend",
    "Backend",
    "Operations",
    "HR",
    "IA",
  ];
  for (let i = 0; i < department.length; i++) {
    let options = document.createElement("option");
    options.textContent = department[i];
    select.appendChild(options);
  }
  document.querySelector("thead tr th:nth-child(3)").append(select);
}
choice();

// adding filter
function filter(department) {
  let user = [
    "All Department",
    "Frontend",
    "Backend",
    "Operations",
    "HR",
    "IA",
  ];
  // for (let i = 0; i < user.length; i++) {
    let row = user.filter(function (ele, index) {
       return ele==department
      
    });

    console.log(row)
    // if (user[i] == department) console.log(i, user[i]);
  }

