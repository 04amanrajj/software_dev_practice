import "./styles.css";

let div = document.getElementById("app"); //main div
let url = "https://jsonplaceholder.typicode.com/comments?_limit=10"; //api
let totalPages;
//get data from api
function makeUrl(url) {
  fetch(url)
    .then((res) => {
      return Promise.all([res.json(), res.headers.get("X-Total-Count")]);
    })
    .then((data) => display(data));
}
// call data
makeUrl(url);

// display data
function display(data) {
  div.innerHTML = `Total comments: ${data[1]}<br/><br/>`; //empty div before adding something
  totalPages = Math.ceil(data[1] / 10);

  data[0].forEach((element) => {
    div.innerHTML += `
    ${JSON.stringify(element)} 
    <br />
    <br />`;
  });

  let pages = document.querySelector(".btn"); //pages buttons
  pages.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    pages.innerHTML += `
    <button class="pbtn" data-id="${i}">${i}</button>
`;
  }

  // on click buttons data will change according to data-id
  pages.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      document.querySelectorAll(".pbtn").forEach((btn) => {
        btn.classList.remove("pagebtn");
      });
      e.target.classList.add("pagebtn");

      let dataid = e.target.dataset.id;
      makeUrl(`${url}&_page=${dataid}`); // Fetch data with page number
    }
  });
}
