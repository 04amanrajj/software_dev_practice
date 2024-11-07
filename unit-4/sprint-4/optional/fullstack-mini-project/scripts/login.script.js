const registerURL = "http://localhost:3400/login";

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
    await fetch(registerURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  } catch (error) {
    console.log({ error: error.message });
  }
});
