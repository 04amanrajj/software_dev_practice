let app = document.getElementById("app");

app.innerHTML = `
<h1>Only Showing Pending Tasks!</h1>
`;

// fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
//   response.json().then((res) => display(res))
// );

async function make(){
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");
    let res = await data.json();
    display(res);
  } catch (error) {
    console.log(error);
  }
};
make()

function display(data) {
  //   console.log(data);
  let newData = data.filter((ele) => {
    if (ele.completed == false) {
      return ele;
    }
  });
  newData.forEach((element) => {
    app.innerHTML += `<div> Id: ${JSON.stringify(
      element.id
    )} <br /> Title: ${JSON.stringify(
      element.title
    )} <br />Status: ${JSON.stringify(element.completed)}</div><br />`;
    console.log(element);
  });
}
