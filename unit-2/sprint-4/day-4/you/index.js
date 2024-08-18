let url = "",
  cordinates = "",
  weather = [];

function search() {
  let search = document.querySelector("#place").value.trim();
  document.querySelector("iframe").src = place;

  let mapurl =
    "https://maps.google.com/maps?&t=&z=13&ie=UTF8&iwloc=&output=embed&q=" +
    encodeURIComponent(search);
  document.querySelector("iframe").src = mapurl;

  url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    search +
    "&appid=f6b71d35bd7689b9f578e4465575a801";

  cordinates =
    "http://api.openweathermap.org/geo/1.0/direct?appid=f6b71d35bd7689b9f578e4465575a801&q=" +
    encodeURIComponent(search);
  // console.log(url);
  getData(url,cordinates);
}

async function getData(url, cordinates) {
  try {
    let res = await fetch(url);
    let data = await res.json();

    let res2 = await fetch(cordinates);
let data2=await res2.json()
let obj={...data, ...data2}
    weather = [obj];
    console.log(weather);
    displayData(weather);
  } catch (error) {
    console.log(error);
  }
}

function displayData(weather) {
  document.querySelector("#weatherinfo").innerHTML = "";
  weather.forEach((element) => {
    let location = document.createElement("h1");
    location.textContent = element.name;

    let temp = document.createElement("h3");
    temp.textContent = Math.floor(element.main.temp - 273.15) + "°C";

    let temp2 = document.createElement("p");
    temp2.textContent =
      "Feels like " +
      Math.floor(element.main.feels_like - 273.15) +
      "°C. " +
      element.weather[0].description +
      ", " +
      element.weather[0].main;

    let wind = document.createElement("p");
    wind.textContent = "Wind Speed " + element.wind.speed + "m/s";

    let extra = document.createElement("p");
    extra.textContent = "Humidity: " + element.main.humidity;

    let extra2 = document.createElement("p");
    extra.textContent = "Visibility:" + element.visibility / 1000 + "km";

    console.log(element)
    document
      .querySelector("#weatherinfo")
      .append(location, temp, temp2, wind, extra, extra2);
  });
}