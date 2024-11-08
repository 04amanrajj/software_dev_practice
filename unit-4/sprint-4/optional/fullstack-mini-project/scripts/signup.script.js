const registerURL = "http://localhost:3400/register";

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const email = document.getElementById("usermail").value;
  const date_of_birth = document.getElementById("dob").value;
  const role = document.getElementById("newRole").value;
  const location = document.getElementById("location").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm").value;

  const obj = {
    name,
    email,
    date_of_birth,
    role,
    location,
    password,
    confirmPassword,
  };

  try {
    await fetch(registerURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    alert("New user registerd")
    window.location.href = "/pages/login.page.html"
  } catch (error) {
    console.log({ error: error.message });
  }
});
