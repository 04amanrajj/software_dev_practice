document.querySelector("form").addEventListener("submit", myLogin);
document.querySelector(".delete").addEventListener("click",fano)
let dataArr = [];
function myLogin(event) {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let number = document.querySelector("#number").value;

  let objInfo = {
    name,
    email,
    number,
  };
  dataArr.push(objInfo);
  localStorage.setItem("newData", JSON.stringify(dataArr));
}
function fano(){
    localStorage.removeItem("newData")
}
