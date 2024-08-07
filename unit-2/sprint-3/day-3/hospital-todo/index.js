document.querySelector("form").addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();

  let Name = document.querySelector("#name").value;
  let docID = document.querySelector("#docID").value;
  let specializtion = document.querySelector("#dept").value;
  let xp = document.querySelector("#exp").value;
  let mail = document.querySelector("#email").value;
  let mobile = document.querySelector("#mbl").value;

  let objData = { Name, docID, specializtion, xp, mail, mobile };
  displayData(objData);
}
function getRole(xp) {
  if (xp >= 5) return "Senior";
  if (xp > 2 && xp < 5) return "Junior";
  return "Trainee";
}
function displayData(objData) {
  let row = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.textContent = objData.Name;

  let td2 = document.createElement("td");
  td2.textContent = objData.docID;

  let td3 = document.createElement("td");
  td3.textContent = objData.specializtion;

  let td4 = document.createElement("td");
  td4.textContent = objData.xp;

  let td5 = document.createElement("td");
  td5.textContent = objData.mail;

  let td6 = document.createElement("td");
  td6.textContent = objData.mobile;

  let td7 = document.createElement("td");
  td7.textContent = getRole(objData.xp);

  let td8 = document.createElement("td");
  td8.textContent = "Delete";
  td8.style.cursor = "pointer";
  td8.style.backgroundColor='red'

  td8.addEventListener("click", () => {
    row.innerHTML = "";
  });

  row.append(td1, td2, td3, td4, td5, td6, td7, td8);
  document.querySelector("tbody").append(row);
}
