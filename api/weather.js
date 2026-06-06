export default async function handler(req, res) {
  const city = req.query.city;

  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`,
  );

  const data = await response.json();

  res.status(200).json(data);
}
