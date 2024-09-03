import "./styles.css";

let catImages = [
  "https://burst.shopifycdn.com/photos/grey-cat-lays-in-sun.jpg?width=400&format=pjpg&exif=1&iptc=1",
  "https://burst.shopifycdn.com/photos/business-cat-in-office.jpg?width=400&format=pjpg&exif=1&iptc=1",
  "https://burst.shopifycdn.com/photos/blue-eyed-cat-daydreams.jpg?width=400&format=pjpg&exif=1&iptc=1",
  "https://burst.shopifycdn.com/photos/blue-eyed-cat-peeking.jpg?width=400&format=pjpg&exif=1&iptc=1",
  "https://burst.shopifycdn.com/photos/grey-cat-with-blue-eyes.jpg?width=400&format=pjpg&exif=1&iptc=1",
];

let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");

startButton.addEventListener("click", function () {
  start();
});

pauseButton.addEventListener("click", function () {
  pause();
});

let id;
let i = 0;
function start() {
  let images = catImages;

  let container = document.getElementById("container");

  let img = document.createElement("img");

  id = setInterval(() => {
    if (i == images.length - 1) i = 0;
    img.src = images[i];
    container.append(img);
    i++;
  }, 1000);
}

function pause() {
  clearInterval(id);
  // 2. complete the function
}
