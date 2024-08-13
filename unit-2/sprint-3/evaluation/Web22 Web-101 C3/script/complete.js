// Write all the JS Code related to Completed Page Here 
let done = JSON.parse(localStorage.getItem("tasks-done")) || [];

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
      td5.textContent = "Favorite";
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
    let arr = JSON.parse(localStorage.getItem("task-favorites")) || [];
    arr.push(element);
    localStorage.setItem("task-favorites", JSON.stringify(arr));
  }
  
  // removeFrom here
  function remove(i) {
    
    done.splice(i, 1);
    localStorage.setItem("tasks-done", JSON.stringify(done));
    displayTable(done)
  }

// FIlter

let filter=document.getElementById("filter")
filter.addEventListener("change",()=>{
    let arr = JSON.parse(localStorage.getItem("tasks-done"))

    if(filter.value=='')displayTable(arr)
        else filteredData(filter.value,arr)
})


function filteredData(priority,arr){
    let filterData=arr.filter((element)=>{
        return element.priority==priority
    })
    displayTable(filterData)
}

  //Call
  displayTable(done);