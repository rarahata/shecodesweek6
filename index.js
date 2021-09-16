//1
function showTemperature(response) {
    let shownTemp = document.querySelector("#temperature");
    shownTemp.innerHTML = Math.round(response.data.main.temp);
  }
  
  function search(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-Input");
    let cityName = `${cityInput.value}`;
    let h1 = document.querySelector("#city");
    h1.innerHTML = cityName;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7796ed76d4738ed90e39d5875eb78f75&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  let currentCity = document.querySelector(".search-form");
  currentCity.addEventListener("submit", search);
  
  //2
  function showCurrentTemp(response) {
    let shownTemp = document.querySelector("#temperature");
    shownTemp.innerHTML = Math.round(response.data.main.temp);
    let h1 = document.querySelector("#city");
    h1.innerHTML = response.data.name;
  }
  
  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=7796ed76d4738ed90e39d5875eb78f75`;
    axios.get(apiUrl).then(showCurrentTemp);
  }
  
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  let currentPosition = document.querySelector("#current-location-button");
  currentPosition.addEventListener("click", getCurrentPosition);
  