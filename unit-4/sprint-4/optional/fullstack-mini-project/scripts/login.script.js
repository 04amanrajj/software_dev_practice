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
    if (response.ok) {
      console.log({data})
      // window.location.href = "/" cause: stoping to save token in LS
      localStorage.setItem("token", data.token);
      localStorage.setItem("logged_in_user", data.name);
      localStorage.setItem("user_role", data.role);
      alert("User logged in successfully");
    }else{
      alert("incorrect credentials");
      location.reload();
    }
  } catch (error) {
    console.log({ error: error.message });
  }
});
