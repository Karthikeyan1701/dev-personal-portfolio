import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const CACHE_KEY = 'weather_cache';
const CACHE_DURATION = 30 * 60 * 1000;

export const useLiveWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);

    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        setWeather(parsed.data);
        setLoading(false);
      }
    }

    const getWeather = async (lat, lon) => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
        );

        const data = await res.json();
        console.log('Weather data:', data);
        if (!data.main) throw new Error("Invalid error data");

        const weatherData = {
          temp: Math.round(data.main.temp),
          condition: data.weather[0].main,
          icon: data.weather[0].icon,
          city: data.name,
        };

        setWeather(weatherData);

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: weatherData,
          }),
        );
      } catch (error) {
        setError("Weather unavailable", error);
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          setError("Location blocked");
          setLoading(false);
        },
      );
    }
  }, []);

  return { weather, loading, error };
};