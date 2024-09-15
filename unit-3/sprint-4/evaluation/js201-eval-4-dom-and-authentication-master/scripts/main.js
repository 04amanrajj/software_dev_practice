// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

// WOrk

loginUserButton.addEventListener("click", async () => {
  let obj = {
    username: loginUserUsername.value,
    password: loginUserPassword.value,
  };
  // console.log(obj)
  try {
    let data = await fetch(userLoginURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    let response = await data.json();

    notificationWrapper.innerHTML = `
    <h5 class="notification info">
          hey ${obj.username}, welcome back!
    </h5>
    `;
    userAuthToken = response.accessToken;
    userId = response.user.id;

    localStorage.setItem("localAccessToken", userAuthToken);
    localStorage.setItem("userId", userId);
  } catch (error) {
    console.log(error);
  }
});

// auth fetch request
getTodoButton.addEventListener("click", async () => {
  let data = await fetch(urlAllTodosOfUser, {
    headers: {
      Authorization: `Bearer ${userAuthToken}`,
    },
  });
  let response = await data.json();
  displayData(response);
});

// display fetch data
function displayData(data) {
  data.forEach((element) => {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo-list-wrapper");
    todoItem.id = "todo-list-wrapper";
    todoItem.innerHTML = `
      <label>
        <input class="todo-item-checkbox" data-id="${
          element.id
        }" type="checkbox" ${element.completed ? "checked" : ""}> ${
      element.title
    }
      </label>
    `;

    mainSection.append(todoItem);

    // for eventListener on perticuler
    const checkbox = todoItem.querySelector(".todo-item-checkbox");
    checkbox.addEventListener("change", async (e) => {
      const checkboxId = e.target.getAttribute("data-id");
     
      let completed=e.target.checked  // checked?

      let data = await fetch(`${urlTodosBase}${checkboxId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userAuthToken}`,
        },
        body: JSON.stringify({
          completed: completed,
        }),
      });
      console.log(data);
      // let response = await data.json();
      // console.log(response)
    });

    console.log(element);
  });
}
