import React from "react";

import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

function Hero() {
  
  return (
    <section className={`bg-hero dark:bg-dark-hero bg-cover bg-left-bottom flex flex-col px-5 py-8 lg:px-12 lg:py-16 gap-5 w-full rounded-lg dark:text-light-gray text-dark-purplish-blue font-medium`}>
      <h1 className={`${roboto} text-2xl md:text-3xl lg:text-4xl max-w-96 lg:max-w-[480px] py-2`}>
        Hey there, I’m Oke and I am a{" "}
        <span className="text-light-blue dark:text-light-blue-DM">front-end developer</span>
      </h1>
      <p className="text-lg lg:text-xl max-w-96 lg:max-w-[480px] text-pretty">
        Every business has unique challenges. I craft custom, intuitive, and
        scalable web solutions to bridge the gap between where you are and where
        you want to be. Let’s turn your goals into a reality.
      </p>
      <div className="mt-5 flex gap-5">
        <Link href={'#projects'} className={`border-2 border-dark-blue dark:border-light-blue-DM text-dark-blue dark:text-light-blue-DM rounded-md px-4 py-2 font-medium`}>See my works</Link>
        <Link href={'/contacts'} className={` bg-dark-blue border-2 dark:bg-light-blue-DM border-dark-blue dark:border-light-blue-DM text-white rounded-md px-4 py-2 font-medium`}>Contact Me</Link>
      </div>
    </section>
  );
}

export default Hero;
