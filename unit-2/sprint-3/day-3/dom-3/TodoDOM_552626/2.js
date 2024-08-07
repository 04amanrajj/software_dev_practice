document.querySelector("form").addEventListener("submit", myTodo);

function myTodo(event) {
  event.preventDefault();
  let taskName = document.querySelector("#task").value;
  let taskPriority = document.querySelector("#priority").value;
  let taskObj = {
    taskName,
    taskPriority,
  };
  displayTable(taskObj);
}

function displayTable(taskObj) {
  let row = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = taskObj.taskName;
  let td2 = document.createElement("td");
  td2.innerText = taskObj.taskPriority;
  if (td2.innerText == "High") {
    td2.style.backgroundColor = "red";
  } else {
    td2.style.backgroundColor = "green";
  }

  let td3 = document.createElement("td");
  td3.innerText = "Add to Fav";

  row.append(td1, td2, td3);
  document.querySelector("tbody").append(row);
}
