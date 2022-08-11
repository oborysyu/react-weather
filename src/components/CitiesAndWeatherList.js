import { CityWeatherItem } from "./CityWeatherItem";

export function CitiesAndWeatherList(props) {
  return (
    <ul>
      {props.citiesWithWeather.map((city) => {
        return <CityWeatherItem city={city} key={city.city_name} />;
      })}
    </ul>
  );
}
