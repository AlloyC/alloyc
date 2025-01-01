'use client';
import AboutMe from "./components/sections/AboutMe";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Weather from "./components/utils/Weather";

export default function Home() {
  return <div className="max-w-screen-xl w-screen px-5 space-y-10 pb-32">
    <Weather />
    <Hero />
    <AboutMe />
    <Skills />
    <Projects/>
  </div>;
}
