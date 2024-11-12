import { baseURL } from "../utils.js";

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const post = document.getElementById("content").value;
  const device = document.getElementById("device").value;

  const obj = { title, post, device };
  const response = await fetch(`${baseURL}/posts/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  if (!response.ok) return alert(data.message);
  console.log(data);
  alert("New post created successfully");
  window.location.href = "/index.html";
});
