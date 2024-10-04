const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "effc03ca33c870b3553336c5febff906";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorCode = document.querySelector(".error");
const blockDisplay = document.querySelector(".weather");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);

  if (response.status == 404) {
  blockDisplay.style.display = "none";
    errorCode.style.display = "block";
  } else {
    errorCode.style.display = "none";
    if ((data.weather[0].main = "Clouds")) {
      weatherIcon.src = "images/clouds.png";
    } else if ((data.weather[0].main = "Clear")) {
      weatherIcon.src = "images/clear.png";
    } else if ((data.weather[0].main = "Drizzle")) {
      weatherIcon.src = "images/drizzle.png";
    } else if ((data.weather[0].main = "Snow")) {
      weatherIcon.src = "images/snow.png";
    } else if ((data.weather[0].main = "Rain")) {
      weatherIcon.src = "images/rain.png";
    } else if ((data.weather[0].main = "Mist")) {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    blockDisplay.style.display = "block";
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
