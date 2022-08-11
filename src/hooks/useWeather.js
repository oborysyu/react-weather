import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, KEY_NAME, API_KEY } from "../config/api";

export function useWeather() {
  const [cities, setCities] = useState([]);
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
    try {
      const storedCities = window.localStorage.getItem(KEY_NAME);
      if (storedCities) {
        setCities(JSON.parse(storedCities));
      } else {
        window.localStorage.setItem(KEY_NAME, JSON.stringify([]));
      }
    } catch (err) {
      console.log("Error occured while manipulation with localstorage:" + err);
    }
  }, []);

  useEffect(() => {
    if (cities.length > 0) {
      const getWeather = async () => {
        const weatherForCity = await Promise.all(
          cities.map((city) => {
            return axios.get(
              API_URL + `city=${city}&country=null&key=${API_KEY}`
            );
          })
        );
        setCityWeather(weatherForCity.map(({ data }) => data.data[0]));
      };
      getWeather();
    }
  }, [cities]);

  const addCity = (city) => {
    let clonedData = cities.concat();
    clonedData.push(city);
    setCities(clonedData);
    window.localStorage.setItem(KEY_NAME, JSON.stringify(clonedData));
  };
  return { cities, cityWeather, addCity };
}
