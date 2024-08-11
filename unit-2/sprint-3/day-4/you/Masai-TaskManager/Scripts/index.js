// Write code related to Home page here
let taskArr = JSON.parse(localStorage.getItem("Objectives"))||[];

let form = document.querySelector("form")
form.addEventListener("submit", myTask);

function myTask(event) {
  event.preventDefault();

  let objTaskList = {
   taskName :  form.name.value,
   description :  form.desc.value,
   taskStart :  form.start.value,
   taskEnd :  form.end.value,
   priority :  form.priority.value
  }

  console.log(objTaskList);
  
  taskArr.push(objTaskList);
  localStorage.setItem("Objectives", JSON.stringify(taskArr));
}
