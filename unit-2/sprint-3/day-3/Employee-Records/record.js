document.querySelector("form").addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();

  let empName = document.querySelector("#name").value;
  let empID = document.querySelector("#employeeID").value;
  let department = document.querySelector("#department").value;
  let xp = document.querySelector("#exp").value;
  let mail = document.querySelector("#email").value;
  let mobile = document.querySelector("#mbl").value;

  let objData = { empName, empID, department, xp, mail, mobile };

  displayData(objData);
}
function getRole(xp) {
  if (xp >= 5) return "Senior";
  if (xp > 2 && xp < 5) return "Junior";
  return "Fresher";
}
function displayData(Data) {
  let row = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.textContent = Data.empName;

  let td2 = document.createElement("td");
  td2.textContent = Data.empID;

  let td3 = document.createElement("td");
  td3.textContent = Data.department;
  let select = document.createElement("select");

  let td4 = document.createElement("td");
  td4.textContent = Data.xp;

  let td5 = document.createElement("td");
  td5.textContent = Data.mail;

  let td6 = document.createElement("td");
  td6.textContent = Data.mobile;

  let td7 = document.createElement("td");
  td7.textContent = getRole(Data.xp);

  let td8 = document.createElement("td");
  td8.textContent = "delete";
  td8.style.backgroundColor = "red";
  td8.style.cursor = "pointer";
  td8.addEventListener("click", () => {
    row.innerHTML = "";
  });

  row.append(td1, td2, td3, td4, td5, td6, td7, td8);

  document.querySelector("tbody").append(row);
}
