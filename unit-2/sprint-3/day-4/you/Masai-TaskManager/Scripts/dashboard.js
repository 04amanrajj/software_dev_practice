let tasks = JSON.parse(localStorage.getItem("Objectives"));

// total task counter


function displayData(data){
  
  
  let tbody = document.querySelector("tbody");
  tbody.innerHTML  = ''
  document.querySelector("#task-count").textContent = tasks.length;
  
  data.forEach((element, i) => {
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
      taskProgress( element , i)
    );
  
    row.append(td6);
  
    tbody.append(row);
  });
}
// display all data at first
displayData(tasks)


function taskProgress(element,i) {
  let taskProgressArr = JSON.parse(localStorage.getItem("progress")) || [];
  taskProgressArr.push(element);

  localStorage.setItem("progress", JSON.stringify(taskProgressArr));

  // remove

  let removeRow = JSON.parse(localStorage.getItem("Objectives"));
  removeRow.splice(i, 1);
  localStorage.setItem("Objectives", JSON.stringify(removeRow));
  let tasks = JSON.parse(localStorage.getItem("Objectives"));
  displayData(tasks)

}

// filter


const filter = document.getElementById('filter');

filter.addEventListener('change' , ()=>{
  let tasks = JSON.parse(localStorage.getItem("Objectives"));

  if(filter.value == '') displayData(tasks)
    
  else filterDataByPriority(filter.value , tasks)  
  
})


function filterDataByPriority(priority , data){
  
  let filteredData = data.filter((ele)=>{
    return ele.priority == priority
  })
  displayData(filteredData)
}
