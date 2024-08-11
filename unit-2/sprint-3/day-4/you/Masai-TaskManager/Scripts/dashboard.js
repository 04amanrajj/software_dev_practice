let tasks = JSON.parse(localStorage.getItem("Objectives"));

// total task counter
document.querySelector("#task-count").textContent = tasks.length;

let tbody = document.querySelector("tbody");
// tbody.innerHTML = "";

tasks.forEach((element, i) => {
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
  td6.textContent = "Add to Progress";
  td6.addEventListener("click", () =>
    taskProgress(
      td1.textContent,
      td2.textContent,
      td3.textContent,
      td4.textContent,
      td5.textContent,
      i
    )
  );

  row.append(td6);

  tbody.append(row);
});

function taskProgress(taskName, description, taskStart, taskEnd, priority,i) {
  let taskProgressArr = JSON.parse(localStorage.getItem("progress")) || [];
  let Data = { taskName, description, taskStart, taskEnd, priority };
  taskProgressArr.push(Data);

  localStorage.setItem("progress", JSON.stringify(taskProgressArr));

  // remove

  let removeRow = JSON.parse(localStorage.getItem("Objectives"));
  removeRow.splice(i, 1);
  localStorage.setItem("Objectives", JSON.stringify(removeRow));

  // alert
  setTimeout(function () {
    alert("Added to progress");
  }, 200);
}
