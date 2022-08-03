let searchInput = document.querySelector("#search-text-input");
const apiKey = "e441798f9c023ade80e4d84933e39e59";

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
  console.log(response.data);
  let h2 = document.querySelector("#currentTempature");
  h2.innerHTML = `${Math.round(response.data.main.temp)}`;
  let conditionValue = document.querySelector("#condition");
  conditionValue.innerHTML = `${response.data.weather[0].description}`;

  let windSpeedValue = document.querySelector("#windSpeed");
  windSpeedValue.innerHTML = `${Math.round(response.data.wind.speed)}`;
}
