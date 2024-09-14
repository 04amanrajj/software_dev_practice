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
let auth = localStorage.getItem("token") || null;

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
    auth = localStorage.setItem("token", data.accessToken);
  } catch (error) {
    alert("You don't look familiar");
  }
});

fetchTodoButton.addEventListener("click", async () => {
  let response = await fetch(todosURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  // console.log(response);
  let data = await response.json();

  mainSection.innerHTML = `
    <pre>
      ${JSON.stringify(data, null, 2)}
    </pre>
  `;
});
