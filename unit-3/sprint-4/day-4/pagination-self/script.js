let box = document.querySelector(".box");
let pagebox = document.querySelector(".pagination");
let url = "https://jsonplaceholder.typicode.com/comments?_limit=10"; //api
let totalItems = 0;
let totalPage = 0;

// fetch data
async function makeurl(url) {
  try {
    let data = await fetch(url);
    let response = await Promise.all([
      data.json(),
      data.headers.get("X-Total-Count"),
    ]);
    // console.log(response[1])
    totalItems = response[1];
    totalPage = Math.ceil(totalItems / 10);
    document.querySelector(".totalC").textContent=`Comments (${totalItems})`
    pageWork(totalPage);
    display(response[0]);
  } catch (error) {
    console.log(error);
  }
}

// on load actions
window.onload = () => {
  makeurl(url);
};

// display data
function display(data) {
  box.innerHTML = "";
  data.forEach((ele) => {
    delete ele.postId;
    box.innerHTML += `<br>${JSON.stringify(ele)}<br>`;
  });
}

let currentPage = 1;

function pageWork(totalPage) {
  renderButton(currentPage, Math.min(currentPage + 9, totalPage));
  setbuttonAction();

  //   last & next
  let next = document.querySelector(".next");
  next.addEventListener("click", () => {
    if (currentPage + 10 <= totalPage) {
      currentPage += 5;
      renderButton(currentPage, Math.min(currentPage + 9, totalPage));
      setbuttonAction();
    }
  });

  let last = document.querySelector(".last");
  last.addEventListener("click", () => {
    if (currentPage - 10 >= 1) {
      currentPage -= 10;
      renderButton(currentPage, Math.min(currentPage + 9, totalPage));
      setbuttonAction();
    }
  });
}

function renderButton(start, end) {
  let button = buttons(start, end);
  pagebox.innerHTML = button;
}

//button Maker
function buttons(start, end) {
  let button = "";
  for (let i = start; i <= end; i++) {
    button += `<button class="pageButton" data-id=${i}>${i}</button>`;
  }
  return button;
}

// change pages
function setbuttonAction() {
  let pagebtn = document.querySelectorAll(".pageButton");
  pagebtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target.dataset.id);
      makeurl(`${url}&_page=${e.target.dataset.id}`);
    });
  });
}
