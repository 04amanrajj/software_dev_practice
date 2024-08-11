// Write code related to Home page here
document.querySelector("form").addEventListener("submit", myTask);

let taskArr = JSON.parse(localStorage.getItem("Objectives"))||[];
function myTask(event) {
  event.preventDefault();

  let taskName = document.querySelector("#name").value;
  let description = document.querySelector("#desc").value;
  let taskStart = document.querySelector("#start").value;
  let taskEnd = document.querySelector("#end").value;
  let priority = document.querySelector("#priority").value;

  let objTaskList = {
    taskName,
    description,
    taskStart,
    taskEnd,
    priority,
  };
  taskArr.push(objTaskList);
  localStorage.setItem("Objectives", JSON.stringify(taskArr));
}
