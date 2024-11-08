const usersdataURL = "http://localhost:3400/user";
const userBox = document.querySelector(".users-box");
const token = localStorage.getItem("token");
const userRole = localStorage.getItem("user_role");

async function loadData() {
  try {
    let response = await fetch(usersdataURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    let data = await response.json();
    if (userRole == "admin") {
      displayUsers(data.data);
    } else {
      userBox.innerHTML = `
    <pre>${"you are not an admin login as admin to continue"}</pre>`;
    }
  } catch (error) {
    console.log({ error: error.message });
  }
}
loadData();

function displayUsers(data) {
  data.forEach((element) => {
    const div = document.createElement("div");
    div.className = "user-card";

    div.innerHTML = `
        <div class="card">
          <h2>${element.name}</h2>
          <p><strong>Email:</strong> ${element.email}</p>
          <p><strong>Date of Birth:</strong> ${element.date_of_birth}</p>
          <p><strong>Role:</strong> ${element.role}</p>
          <p><strong>Location:</strong> ${element.location}</p>
          <button class="delete">Delete</button>
          <hr>
        </div>
      `;
    userBox.append(div);
    console.log(element);

    const deleteBtn = div.querySelector(".delete");
    deleteBtn.addEventListener("click", async () => {
      try {
        await fetch(`http://localhost:3400/delete${element._id}`, {
          method: "DELETE",
        });
        div.remove()
      } catch (error) {
        console.log({ error: error.message });
      }
    });
  });
}
