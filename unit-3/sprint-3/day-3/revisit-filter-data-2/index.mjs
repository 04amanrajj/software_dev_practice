let app = document.getElementById("app");

app.innerHTML = `
<h1>A to Z!</h1>
`;

(async () => {
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");
    let res = await data.json();
    display(res);
  } catch (error) {
    console.log(error);
  }
})()

function display(data) {
let sorted=data.map((ele)=>ele.title)
sorted.sort()
sorted.forEach((ele)=>app.innerHTML+=`<strong>title:</strong><div>${ele}</div> </br>`)
}

