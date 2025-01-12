const apiKey = "238b7afa7a1adbfcccbb4fa4a086858d"; 
const loader = document.getElementById("loader");
const weatherDiv = document.getElementById("weather");

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name!");
  }
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  loader.classList.remove("hidden");
  weatherDiv.innerHTML = "";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      loader.classList.add("hidden"); 
      displayWeather(data);
    })
    .catch((error) => {
      loader.classList.add("hidden"); 
      alert("Error fetching weather data. Please try again!");
      console.error("Error:", error);
    });
}

function displayWeather(data) {
  if (data.cod === 200) {
    weatherDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].main} (${data.weather[0].description})</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } else {
    weatherDiv.innerHTML = `<p>City not found. Please try again!</p>`;
  }
}
