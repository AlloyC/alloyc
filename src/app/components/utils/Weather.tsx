import Image from "next/image";
import React, { useEffect, useState } from "react";
import WeatherIcon from "../../../../public/assets/icons/weather.svg";
import Degree from "../../../../public/assets/icons/degree-dot.svg";

function Weather() {
  const [degree, setDegree] = useState('loading...')
  const temperature = async () => {
    const weatherKey = 'd9812fa67f7b4711b8f112708250101'
    try {
      const getLatidudeLongitude = await fetch(
        "http://ip-api.com/json/?fields=lat,lon"
      );
      if (!getLatidudeLongitude.ok) {
        throw new Error("error fetching latitude and longitude");
      }
      const latLonResponse = await getLatidudeLongitude.json();
      const getWeather = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${latLonResponse.lat},${latLonResponse.lon}&key=${weatherKey}`
      );
      if (!getWeather) {
        throw new Error("error fetching weather");
      }
      const weatherResponse = await getWeather.json();
      console.log(weatherResponse.current);
      
      const temperature = weatherResponse.current["temp_c"];
      setDegree(temperature)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
temperature()
  }, [])

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };
  const currentDate = new Date().toLocaleDateString("en-US", options);
  return (
    <div className="flex justify-end gap-2 w-full px-6 pt-2">
      <Image src={WeatherIcon} alt="cloud" className="w-10 md:w-12 " />
      <div className="flex flex-col ">
        <span className="flex italic">
          {degree}{" "}
          <Image
            src={Degree}
            className="mt-0.5 ml-0.5 self-start"
            alt="degree"
          />
          <span className="text-sm self-end">C</span>
        </span>
        <span className="italic">{currentDate}</span>
      </div>
    </div>
  );
}

export default Weather;
