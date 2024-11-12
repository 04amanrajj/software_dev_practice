import { baseURL } from "../utils.js";

const postBox = document.getElementById("post-box");

async function load() {
  try {
    const response = await fetch(`${baseURL}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    if (!response.ok) return alert(data.message);

    postBox.innerHTML = "";
    data.message.forEach((element) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
      postDiv.innerHTML = `
        <h2>${element.title}</h2>
        <p>${element.post}</p>
        <p>${element.device}</p>
      `;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () =>
        deleteBox(element._id, postDiv)
      );
      postDiv.appendChild(deleteButton);
      postBox.appendChild(postDiv);
    });
  } catch (error) {
    console.log("Error loading posts:", error.message);
  }
}

async function deleteBox(id, div) {
  try {
    const response = await fetch(`${baseURL}/posts/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    if (!response.ok) return alert(data.message);
    div.remove();
  } catch (error) {
    console.log("Error deleting post:", error.message);
  }
}

load();
