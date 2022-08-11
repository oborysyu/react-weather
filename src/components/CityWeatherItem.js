export function CityWeatherItem({ city }) {
  return (
    <div className="cityWeatherItem">
      <div className="cityName">{city.city_name}</div>
      <div></div>
      <div className="currentWeather">
        Temperature: {city.temp}°; Cloud coverage: {city.clouds}%; Wind speed:{" "}
        {city.wind_spd}m/s
      </div>
    </div>
  );
}
