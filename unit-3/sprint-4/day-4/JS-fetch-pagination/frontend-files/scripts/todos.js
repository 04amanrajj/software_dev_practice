const baseURL = "http://127.0.0.1:9090";
const recipeIngredientURL = "http://127.0.0.1:9090/recipeIngredients";
const employeeURL = "http://localhost:9090/employees";
const todosURL = "http://localhost:9090/todos?_limit=5";
const userRegisterUrl = "http://localhost:9090/user/register";
const userLoginUrl = "http://localhost:9090/user/login";

let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

let registerUserUsername = document.getElementById("register-user-username");
let registerUserFirstname = document.getElementById("register-user-firstname");
let registerUserLastname = document.getElementById("register-user-lastname");
let registerUserEmail = document.getElementById("register-user-email");
let registerUserPassword = document.getElementById("register-user-password");
let registerUserAvatar = document.getElementById("register-user-avatar");
let registerUserLevel = document.getElementById("register-user-level");
let registerUserButton = document.getElementById("register-user");

let updateUserUsername = document.getElementById("update-user-username");
let updateUserFirstname = document.getElementById("update-user-firstname");
let updateUserLastname = document.getElementById("update-user-lastname");
let updateUserEmail = document.getElementById("update-user-email");
let updateUserPassword = document.getElementById("update-user-password");
let updateUserAvatar = document.getElementById("update-user-avatar");
let updateUserLevel = document.getElementById("update-user-level");
let updateUserButton = document.getElementById("update-user");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-password");
let loginUserButton = document.getElementById("login-user");

let fetchTodoButton = document.getElementById("fetch-data");
let auth = null;

window.addEventListener("load", () => {});

registerUserButton.addEventListener("click", async () => {
  let obj = {
    username: registerUserUsername.value,
    firstname: registerUserFirstname.value,
    lastname: registerUserLastname.value,
    email: registerUserEmail.value,
    password: registerUserPassword.value,
    userLevel: registerUserLevel.value,
  };
  console.log(obj);

  try {
    let response = await fetch(userRegisterUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await response.json();
    alert(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
});

loginUserButton.addEventListener("click", async () => {
  let obj = {
    username: loginUserUsername.value,
    password: loginUserPassword.value,
  };
  console.log(obj);
  try {
    let response = await fetch(userLoginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await response.json();
    auth = data.accessToken;
    alert("HEllo User")
  } catch (error) {
    alert("You don't look familiar");
  }
});

fetchTodoButton.addEventListener("click", () => {
  makeurl(todosURL);
});

async function makeurl(todosURL) {
  try {
    let data = await fetch(todosURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    });
    // console.log(response);
    let response = await Promise.all([
      data.json(),
      data.headers.get("X-Total-Count"),
    ]);
    totalItems = response[1];
    totalPage = Math.ceil(totalItems / 10);
    pageWork(totalPage);
    display(response[0]);
  } catch (error) {
    alert("login First",JSON.stringify(error))
  }
}

// paginationWrapper

function display(data) {
  mainSection.innerHTML = `
    <pre>
      ${JSON.stringify(data, null, 2)}
    </pre>
  `;
}

renderButton(1, 5);

function renderButton(start, end) {
  let button = buttons(start, end);
  paginationWrapper.innerHTML = button;
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
      makeurl(`${todosURL}&_page=${e.target.dataset.id}`);
    });
  });
}

let currentPage = 1;

function pageWork(totalPage) {
  renderButton(currentPage, Math.min(currentPage + 4, totalPage));
  setbuttonAction();

  //   last & next
  let next = document.querySelector(".next");
  next.addEventListener("click", () => {
    if (currentPage + 5 <= totalPage) {
      currentPage += 2;
      renderButton(currentPage, Math.min(currentPage + 4, totalPage));
      setbuttonAction();
    }
  });

  let last = document.querySelector(".last");
  last.addEventListener("click", () => {
    if (currentPage - 5 >= 1) {
      currentPage -= 5;
      renderButton(currentPage, Math.min(currentPage + 4, totalPage));
      setbuttonAction();
    }
  });
}
