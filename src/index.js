let searchInput = document.querySelector("#search-text-input");
const apiKey = "e441798f9c023ade80e4d84933e39e59";
let celciusTempature = null;
function search(event) {
  event.preventDefault();

  let h1 = document.querySelector("h1");

  h1.innerHTML = `${searchInput.value} Weather`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTempature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTempature(response) {
  celciusTempature = `${Math.round(response.data.main.temp)}`;

  let tempatureDisplay = document.querySelector("#currentTempature");
  let conditionValue = document.querySelector("#condition");
  let windSpeedValue = document.querySelector("#windSpeed");
  let iconValue = document.querySelector("#icon");

  tempatureDisplay.innerHTML = `${Math.round(response.data.main.temp)}`;
  conditionValue.innerHTML = `${response.data.weather[0].description}`;
  windSpeedValue.innerHTML = `${Math.round(response.data.wind.speed)}`;
  iconValue.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function displayFahrenheitTempature(event) {
  event.preventDefault();
  ("");
  let tempatureDisplay = document.querySelector("#currentTempature");
  let fahrenheitTempature = (celciusTempature * 9) / 5 + 32;
  tempatureDisplay.innerHTML = Math.round(fahrenheitTempature);
}

function displayCelciusTempature(event) {
  event.preventDefault();
  let tempatureDisplay = document.querySelector("#currentTempature");
  tempatureDisplay.innerHTML = Math.round(celciusTempature);
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheitTempature);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", displayCelciusTempature);
