let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskObj = {

    taskName : form.task.value,
    priority : document.querySelector('#priority').value
  }

  console.log(taskObj);
  displayData(taskObj)
  
});

function displayData(data){
  let tbody = document.querySelector("tbody")
  // tbody.innerHTML = ''
  let row = document.createElement("tr");

  // row element td
  let name = document.createElement("td");
  name.textContent = data.taskName;

  let order = document.createElement("td");
  order.textContent = data.priority;

  let fav = document.createElement("td");
  fav.innerText = "add to fav";
  fav.addEventListener('click' , ()=>{
    addTofav(data.taskName)
  })

  let deleteButton = document.createElement("td");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener('click' , ()=>{
    handledeleteButton(data.taskName)
    // alert(`${taskName.value } is deleted`)
  })


  row.append(name, order, fav , deleteButton);

  tbody.appendChild(row);

  if (order.textContent == "High") {
    order.style.backgroundColor = "red";
  } else {
    order.style.backgroundColor = "green";
  }

}




function handledeleteButton(){
  let defultData  = {
    taskName : "delete demo data row",
    priority : 'High'
  }
  displayData(defultData)
  alert('deleted ')  
}


function addTofav(data) {
  alert(`${data}  added in fav`)
}



let defultData  = {
  taskName : "demo row",
  priority : 'High'
}
displayData(defultData)