import { baseURL } from "../utils.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;

    const obj = {
      name,
      email,
      gender,
      password,
    };
    const response = await fetch(`${baseURL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await response.json();
    if (!response.ok) return alert(data.message);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.href = "/index.html";
    alert(data.message);
  } catch (error) {
    console.log(error.message);
  }
});
