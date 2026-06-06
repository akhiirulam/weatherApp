async function fetchWeather() {
  try {
    const city = document.getElementById("city").value.trim();

    if (!city) {
      alert("Please enter a city name");
      return;
    }

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`,
    );

    const data = await response.json();

    const display = document.getElementById("display");

    if (data.error) {
      display.innerHTML = "<p class='text-red-500'>Invalid city name</p>";
      return;
    }

    display.innerHTML = `
      <div class="space-y-2 text-center">
        <h2 class="text-xl font-bold">${data.location.name}</h2>
        <p>Country: ${data.location.country}</p>
        <p>Local Time: ${data.location.localtime}</p>
        <p>Weather: ${data.current.condition.text}</p>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind: ${data.current.wind_kph} km/h</p>
      </div>
    `;
  } catch (error) {
    document.getElementById("display").innerHTML =
      "<p class='text-red-500'>Failed to fetch weather data.</p>";

    console.error(error);
  }
}
