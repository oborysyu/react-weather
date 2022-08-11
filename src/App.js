import { AddCityComponent } from "./components/AddCityComponent";
import { CitiesAndWeatherList } from "./components/CitiesAndWeatherList";
import Context from "./components/WeatherContext";
import {useWeather} from "./hooks/useWeather"

function App() {
  const { cities, cityWeather, addCity } = useWeather();

  return (
    <Context.Provider  value={{ cities, cityWeather, addCity }}>
    <div className="App">
          <AddCityComponent addCity={addCity} />
          <CitiesAndWeatherList citiesWithWeather={cityWeather} />
    </div>
    </Context.Provider>
  );
}

export default App;
