let taskProgressArr = JSON.parse(localStorage.getItem("progress"));
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
  td6.textContent = "Add To Done";
  td6.addEventListener("click", () =>
    taskDone(
      td1.textContent,
      td2.textContent,
      td3.textContent,
      td4.textContent,
      td5.textContent,
      i
    )
  );
  row.append(td6);

  document.querySelector("tbody").append(row);
});

function taskDone(taskName, description, taskStart, taskEnd, priority, i) {
  let taskDoneArr = JSON.parse(localStorage.getItem("Done")) || [];
  let Data = { taskName, description, taskStart, taskEnd, priority };
  taskDoneArr.push(Data);
  localStorage.setItem("Done", JSON.stringify(taskDoneArr));

  // delete

  let taskProgressArr = JSON.parse(localStorage.getItem("progress"))
  taskProgressArr.splice(i, 1);
  localStorage.setItem("progress", JSON.stringify(taskProgressArr));

  setTimeout(function () {
    alert("Added to Done please refresh page");
  }, 200);

}
