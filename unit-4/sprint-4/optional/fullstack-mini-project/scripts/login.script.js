const loginURL = "http://localhost:3400/login";

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("usermail").value;
  const password = document.getElementById("password").value;

  const obj = {
    email,
    password,
  };

  try {
    let response = await fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await response.json();
    console.log(data);
    localStorage.setItem("token", data.token);
  } catch (error) {
    console.log({ error: error.message });
  }
});
