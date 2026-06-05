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

    console.log(data);

    const country = document.createElement("p");
    country.textContent = `Country: ${data.location.country}`;

    const time = document.createElement("p");
    time.textContent = `Time: ${data.location.localtime}`;

    const rain = document.createElement("p");
    rain.textContent = `Chance of rain: ${data.current.chance_of_rain}%`;

    const condition = document.createElement("p");
    condition.textContent = `Weather Condition: ${data.current.condition.text}`;

    const temp = document.createElement("p");
    temp.textContent = `Temperature: ${data.current.temp_c}°C`;

    display.append(country, time, rain, condition, temp);
  }
}
