'use client';
import NavBar from "./components/sections/NavBar";
import Weather from "./components/sections/Weather";

export default function Home() {
  return <div className="max-w-screen-xl w-screen px-2">
    <Weather/>
  </div>;
}
