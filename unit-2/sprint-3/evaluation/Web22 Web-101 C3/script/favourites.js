// Write all the JS Code related to Favourites Page Here 
let done = JSON.parse(localStorage.getItem("task-favorites")) || [];

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
      td5.textContent = "Remove";
      td5.addEventListener("click", function () {
    
        remove(i);
      });
      row.append(td5);
  
      document.querySelector("tbody").append(row);
    });
  }


  // removeFrom here
  function remove(i) {
    
    done.splice(i, 1);
    localStorage.setItem("task-favorites", JSON.stringify(done));
    displayTable(done)
  }
  
  //Call
  displayTable(done);