import React from "react";

import { Roboto } from "next/font/google";
import Button from "../utils/Button";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

function Hero() {
  return (
    <div className={`bg-hero bg-cover bg-left-bottom flex flex-col px-5 py-8 lg:px-12 lg:py-16 gap-5 w-full rounded-lg text-dark-purplish-blue font-medium`}>
      <h1 className={`${roboto} text-2xl md:text-3xl lg:text-4xl max-w-96 lg:max-w-[480px] py-2`}>
        Hey there, I’m Oke and I am a{" "}
        <span className="text-light-blue">front-end developer</span>
      </h1>
      <p className="text-lg lg:text-xl max-w-96 lg:max-w-[480px] text-pretty">
        Every business has unique challenges. I craft custom, intuitive, and
        scalable web solutions to bridge the gap between where you are and where
        you want to be. Let’s turn your goals into a reality.
      </p>
      <div className="mt-5 flex gap-5">
        <Button
          btnFunction={() => console.log("clicked")}
          solid={false}
          text="See my works"
        />
        <Button
          btnFunction={() => console.log("clicked")}
          solid={true}
          text="Contact Me"
        />
      </div>
    </div>
  );
}

export default Hero;
