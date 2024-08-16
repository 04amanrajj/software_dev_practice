document.querySelector("#orderButton").addEventListener("click", displayData);

function displayData() {
  let imgDiv = document.querySelector("#forImgs");
  imgDiv.innerHTML = "";

  let sushi = document.querySelector("#sushi");
  let pizza = document.querySelector("#pizza");
  let burger = document.querySelector("#burger");
  let pasta = document.querySelector("#pasta");

  let arr = [];
  if (sushi.checked) arr.push("Sushi");
  if (pizza.checked) arr.push("Pizza");
  if (burger.checked) arr.push("Burger");
  if (pasta.checked) arr.push("Pasta");

  let foodImg = {
    Pizza: "https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_1280.jpg",
    Burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Pasta: "https://images.unsplash.com/photo-1529042355636-0f06afe127a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhc3RhfGVufDB8fDB8fHww",
    Sushi: "https://img.freepik.com/free-photo/sushi-dish-asian-restaurant_23-2148195568.jpg?w=900&t=st=1723808242~exp=1723808842~hmac=734d71d103f071b1f1b364b70553f92fd454848d2cf0e9bb60f911dc12cb3d64",
  };

  let orderConfirm = new Promise((res, rej) => {
    if (arr.length == 0) rej("Please select at least one item");
    else res("Order is preparing...");
  });

  orderConfirm
    .then((res) => {
      console.log(res);
      setTimeout(() => {
        for (let key of arr) {
          if (foodImg[key]) {
            let img = document.createElement("img");
            img.src = foodImg[key];
            img.style.grid = '1';
            img.style.margin = '10px';
            imgDiv.append(img);
          }
        }
      }, 2000);
    })
    .catch((rej) => {
      alert(rej);
    });
}
