const GET_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=337183642e7e9dcb49e6fec68a2bb5de`;

const loadWeather = async () => {
  try {
    const res = await fetch(GET_WEATHER_API);
    const resJson = await res.json();
    let result = `Min: ${Math.round(
      (resJson.main.temp_min - 273.15) * (9 / 5) + 32,
    )} Max: ${Math.round((resJson.main.temp_max - 273.15) * (9 / 5) + 32)}`;
    return result;
  } catch (error) {
    return 'No data';
  }
};

export { GET_WEATHER_API, loadWeather };
