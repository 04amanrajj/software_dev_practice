// Write code related to Done page here
let taskProgressArr = JSON.parse(localStorage.getItem("Done"));
// console.log(taskProgressArr[0]);

taskProgressArr.forEach((element, i) => {
  let row = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.textContent = element.taskName;
  row.append(td1);

  let td2 = document.createElement("td");
  td2.textContent = element.description;
  row.append(td2);

  let td3 = document.createElement("td");
  td3.textContent = element.taskStart;
  row.append(td3);

  let td4 = document.createElement("td");
  td4.textContent = element.taskEnd;
  row.append(td4);

  let td5 = document.createElement("td");
  td5.textContent = element.priority;
  row.append(td5);

  let td6 = document.createElement("td");
  td6.textContent = "Remove";
  row.append(td6);
  td6.addEventListener("click", () => taskRemove(i));

  document.querySelector("tbody").append(row);
});

function taskRemove(i) {
  removeRow = JSON.parse(localStorage.getItem("Done"));

  removeRow.splice(i, 1);
  localStorage.setItem("Done", JSON.stringify(removeRow));

  setTimeout(function () {
    alert("Task Removed please refresh page");
  }, 200);
}
