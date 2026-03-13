import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export const useLiveWeather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const getWeather = async(lat, lon) => {
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
                );

                const data = await res.json();
                console.log("Weather data:", data);
                if (!data.main) return;

                setWeather({
                    temp: Math.round(data.main.temp),
                    condition: data.weather[0].main,
                    icon: data.weather[0].icon,
                    city: data.name
                });
            } catch (error) {
                console.error("Weather fetch error:", error);
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    getWeather(
                        position.coords.latitude,
                        position.coords.longitude
                    );
                },
                (error) => {
                    console.error("Location permission denied", error);
                }
            );
        }
    }, []);

    return weather;
}