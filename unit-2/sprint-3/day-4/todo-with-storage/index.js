document.querySelector("form").addEventListener("submit", myTodo);
let todoArr = JSON.parse(localStorage.getItem("todo")) || [];
let favArr = [];
displayTable(todoArr);

function myTodo(event) {
  event.preventDefault();
  let taskName = document.querySelector("#task").value;
  let taskPriority = document.querySelector("#priority").value;
  let taskObj = {
    taskName,
    taskPriority,
  };
  todoArr.push(taskObj);
  localStorage.setItem("todo", JSON.stringify(todoArr));

  displayTable(todoArr);
}
function displayTable(todoArr) {
  document.querySelector("tbody").innerHTML = "";
  for (let i = 0; i < todoArr.length; i++) {
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = todoArr[i].taskName;

    let td2 = document.createElement("td");
    td2.textContent = todoArr[i].taskPriority;
    if (todoArr[i].taskPriority == "High") {
      td2.style.backgroundColor = "red";
    } else {
      td2.style.backgroundColor = "green";
    }

    let td3 = document.createElement("td");
    td3.textContent = "add to Fav";
    td3.addEventListener("click", function () {
      favArr.push(todoArr[i]);
      localStorage.setItem("Favourite", JSON.stringify(favArr));
    });
    row.append(td1, td2, td3);

    document.querySelector("tbody").append(row);
  }
}