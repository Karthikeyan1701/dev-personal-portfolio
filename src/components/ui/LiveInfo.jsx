import { MapPin } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import useDigitalClock from "../../hooks/useDigitalClock";
import { useLiveWeather } from "../../hooks/useLiveWeather";

const LiveStatus = () => {
  const { time, date } = useDigitalClock();
  const weather = useLiveWeather();

  return (
    <FadeIn delay={0}>
      <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 px-4.5 py-2.75 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">

        <span className="text-xs md:text-sm text-white tracking-[1.2px]">
          {time} • {date}
        </span>

        <span className="text-white/40">|</span>

        {weather && (
          <span className="flex items-center gap-1 text-xs md:text-sm text-white tracking-[1.2px]">
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
              alt="weather"
              className="w-4 h-4"
            />
            {weather.temp}°C
          </span>
        )}

        {weather?.city && (
          <span className="flex items-center gap-1 text-xs text-white/80">
            <MapPin className="w-3 h-3" />
            {weather.city}
          </span>
        )}

      </div>
    </FadeIn>
  );
};

export default LiveStatus;