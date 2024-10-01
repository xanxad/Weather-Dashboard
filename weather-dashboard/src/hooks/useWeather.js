import { useState, useEffect, useCallback } from "react";
import { getWeather } from "../services/weatherService";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Automatically fetch weather data every 5 minutes

  useEffect(() => {
    let intervalId;
    if (weatherData) {
      // Fetch weather data every 5 minutes for the current city
      intervalId = setInterval(() => {
        fetchWeather(weatherData.name); // Change this based on how city is stored
      }, 300000); // Update every 5 minutes
    }
    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, [weatherData, fetchWeather]);

  return { weatherData, loading, error, fetchWeather };
};

export default useWeather;
