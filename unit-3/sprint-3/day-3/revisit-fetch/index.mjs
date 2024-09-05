import "./styles.css";

let div = document.getElementById("app");

fetch("https://jsonplaceholder.typicode.com/posts").then((resonse) =>
  resonse.json().then((items) => data(items))
);

function data(items) {
  items.forEach((element) => {
    console.log(element);
    let data = `
    <h2>ID:${element.userId}</h2>
    <h3>Title: ${element.title}</h3>
    <h4>Body: ${element.body}</h4>
    `;
    div.innerHTML += data;
  });
}
