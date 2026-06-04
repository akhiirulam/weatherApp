async function fetchWeather() {
  const getCity = document.getElementById("city");

  const city = getCity.value;

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=96d6132675004181892111830260406&q=${city}&aqi=no`,
  );

  const data = await response.json();

  if (data.error) {
    const display = document.getElementById("display");
    display.innerHTML = "";

    const weatherData = document.createElement("p");

    weatherData.textContent = "Enter valide city name";

    display.appendChild(weatherData);
  } else {
    const display = document.getElementById("display");

    display.innerHTML = "";
    const weatherData = document.createElement("p");

    weatherData.textContent = `Weather Condition: ${data.current.condition.text}`;

    display.appendChild(weatherData);
  }
}
