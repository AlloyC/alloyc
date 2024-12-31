import Image from "next/image";
import React from "react";
import WeatherIcon from "../../../../public/assets/icons/weather.svg";
import Degree from "../../../../public/assets/icons/degree-dot.svg";

function Weather() {
  const degree = 35;
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
