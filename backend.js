async function fetchWeather(event) {
  const getCity = document.getElementById("city");

  const city = getCity.value;

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=96d6132675004181892111830260406&q=${city}&aqi=no`,
  );
  const data = await response.json();

  console.log(data);
}
