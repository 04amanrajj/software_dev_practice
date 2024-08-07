let submit = document.querySelector("form").addEventListener("submit", pressed);
let taskName = document.querySelector("#task");

function pressed(event) {
  event.preventDefault();

  let row = document.createElement("tr");
  let name = document.createElement("td");
  let order = document.createElement("td");
  let fav = document.createElement("td");

  name.textContent = taskName.value;
  order.textContent = document.querySelector("#priority").value;

  row.appendChild(name);
  row.appendChild(order);
  row.appendChild(fav);

  document.querySelector("tbody").appendChild(row);

  if (order.textContent == "High") {
    order.style.backgroundColor = "red";
  } else {
    order.style.backgroundColor = "green";
  }
}
