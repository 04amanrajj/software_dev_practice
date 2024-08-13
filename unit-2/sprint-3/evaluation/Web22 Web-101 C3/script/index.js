let form = document.querySelector("form");
let DataArr = JSON.parse(localStorage.getItem("tasks")) || [];
form.addEventListener("submit", myTodo);

// Storing Data to local
function myTodo(event) {
  event.preventDefault();

  let obj = {
    name: form.name.value,
    type: form.type.value,
    date: form.date.value,
    priority: form.priority.value,
  };

  DataArr.push(obj);
  localStorage.setItem("tasks", JSON.stringify(DataArr));
  displayTable(DataArr);
}

// sending data to table
function displayTable(obj) {
  document.querySelector("tbody").innerHTML = "";
  obj.forEach((element,i) => {
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = element.name;
    row.append(td1);

    let td2 = document.createElement("td");
    td2.textContent = element.type;
    row.append(td2);

    let td3 = document.createElement("td");
    td3.textContent = element.date;
    row.append(td3);

    let td4 = document.createElement("td");
    td4.textContent = element.priority;
    row.append(td4);

    let td5 = document.createElement("td");
    td5.textContent = "Complete";
    td5.addEventListener("click", function () {
      newLS(element);
      remove(i);
    });
    row.append(td5);

    document.querySelector("tbody").append(row);
  });
}

// move to new LS

function newLS(element) {
  let arr = JSON.parse(localStorage.getItem("tasks-done")) || [];
  arr.push(element);
  localStorage.setItem("tasks-done", JSON.stringify(arr));
}

// removeFrom here
function remove(i) {
  
  DataArr.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(DataArr));
  displayTable(DataArr)
}

//Call
displayTable(DataArr);
