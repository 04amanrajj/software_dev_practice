let q = ["aman", "code", "sites"];

let body = document.querySelector("body");

body.innerHTML = `
  <ol>
    ${q.map((item) => `<li>${item}</li>`).join("")}
  </ol>
`;
