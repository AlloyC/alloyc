"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface LearnMoreData {
  name: string;
  title: string;
  description: string;
  overview: string;
  links: { name: string; url: string }[];
  technologies: string[];
  features: string[];
  challenge: string[];
  solution: string[];
  keyLearnings: string[];
  outcome: string[];
  reflection: string;
  images: { src: string; alt: string }[];
}

function LearnMorePage() {
  const url = usePathname();
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<null | LearnMoreData>();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api${url}`);
        const data: LearnMoreData = await response.json();
        setData(data);
        setMounted(true);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    })();
  }, []);

  if (!mounted || !data) return null;

  return (
    <div>
      <article className="hidden md:block max-w-screen-lg px-5 mx-auto pt-8">
        <h2 className="flex items-center gap-2 text-xl">
          <span className="font-medium ">{data.title} </span>
          <span className="w-7 h-0.5 rounded-full bg-black dark:bg-light-gray"></span>
          <span className="italic">{data.description}</span>
        </h2>
        <div className="flex gap-16 mt-10 justify-between w-full">
          <div className="flex-1 space-y-16">
            <section className="">
              <h4 className=" leading-10 text-lg font-medium">Overview:</h4>
              <p className="max-w-[72ch] text-pretty">{data.overview}</p>
              <div className="mt-6 flex gap-20">
                <Link
                  className="underline text-purplish-blue dark:text-sea-blue font-medium"
                  href={data.links[0].url}
                >
                  {data.links[0].name}
                </Link>
                <Link
                  className="underline text-purplish-blue dark:text-sea-blue font-medium"
                  href={data.links[1].url}
                >
                  {data.links[1].name}
                </Link>
              </div>
            </section>
            <section className="">
              <h3 className="text-xl font-medium">Technologies Used</h3>
              <ul className="space-y-2 pl-4 pt-4">
                {data.technologies.map((tech) => {
                  return (
                    <li
                      key={tech}
                      className="flex justify-start gap-3 items-center"
                    >
                      <span className="rounded-full w-5 h-5 border-2 border-purplish-blue dark:border-sea-blue"></span>
                      <span>{tech}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
            <Image
              src={data.images[1].src}
              alt={data.images[1].alt}
              className="w-full rounded-lg"
              width={500}
              height={300}
            />
            <section>
              <h3 className="text-xl font-medium">Key learnings:</h3>
              <ul className="space-y-2 pl-4 pt-4">
                {data.keyLearnings.map((point) => {
                  return (
                    <li
                      key={point}
                      className="flex justify-start gap-3 items-start"
                    >
                      <span className="rounded-full mt-1 w-5 h-5 border-2 border-purplish-blue dark:border-sea-blue"></span>
                      <span className="flex-1 text-pretty">{point}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <div className="flex-1 space-y-16">
            <Image
              src={data.images[0].src}
              alt={data.images[0].alt}
              className="w-full rounded-lg"
              width={500}
              height={300}
            />
            <section>
              <h3 className="text-xl font-medium mb-2">
                Chanllenges and Solutions
              </h3>
              {data.challenge.map((paragraph) => (
                <p key={paragraph} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
            <Image
              src={data.images[2].src}
              alt={data.images[2].alt}
              className="w-full rounded-lg"
              width={500}
              height={300}
            />
            <section>
              <h3 className="text-xl font-medium mb-2">Outcome</h3>
              {data.outcome.map((paragraph) => (
                <p key={paragraph} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
          </div>
        </div>
        <section className="mt-16 mb-16">
          <h3 className="text-xl font-medium mb-2 text-center">Reflection</h3>
          <p className="text-center text-balance max-w-[60ch] mx-auto">
            {data.reflection}
          </p>
        </section>
      </article>
      <article className="md:hidden px-5 mx-auto pt-8 space-y-8">
        <h2 className="flex gap-y-0 gap-x-2 text-lg items-center flex-wrap">
          <span className="font-medium text-nowrap">{data.title} </span>
          <span className="w-5 h-0.5 rounded-full bg-black dark:bg-light-gray text-base"></span>
          <span className="italic">{data.description}</span>
        </h2>
        <Image
          src={data.images[0].src}
          alt={data.images[0].alt}
          className="w-full rounded-lg"
          width={500}
          height={300}
        />
        <section className="">
          <h4 className=" leading-10 text-lg font-medium">Overview:</h4>
          <p className="max-w-[72ch] text-pretty">{data.overview}</p>
          <div className="mt-6 flex gap-20">
            <Link
              className="underline text-purplish-blue dark:text-sea-blue font-medium"
              href={data.links[0].url}
            >
              {data.links[0].name}
            </Link>
            <Link
              className="underline text-purplish-blue dark:text-sea-blue font-medium"
              href={data.links[1].url}
            >
              {data.links[1].name}
            </Link>
          </div>
        </section>
        <section className="">
          <h3 className="text-xl font-medium">Technologies Used</h3>
          <ul className="space-y-2 pl-4 pt-4">
            {data.technologies.map((tech) => {
              return (
                <li
                  key={tech}
                  className="flex justify-start gap-3 items-center"
                >
                  <span className="rounded-full w-5 h-5 border-2 border-purplish-blue dark:border-sea-blue"></span>
                  <span>{tech}</span>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h3 className="text-xl font-medium mb-2">
            Chanllenges and Solutions
          </h3>
          {data.challenge.map((paragraph) => (
            <p key={paragraph} className="mb-4">
              {paragraph}
            </p>
          ))}
        </section>
        <Image
          src={data.images[1].src}
          alt={data.images[1].alt}
          className="w-full"
          width={500}
          height={300}
        />
        <section>
          <h3 className="text-xl font-medium">Key learnings:</h3>
          <ul className="space-y-2 pl-4 pt-4">
            {data.keyLearnings.map((point) => {
              return (
                <li
                  key={point}
                  className="flex justify-start gap-3 items-start"
                >
                  <span className="rounded-full mt-1 w-5 h-5 border-2 border-purplish-blue dark:border-sea-blue"></span>
                  <span className="flex-1 text-pretty">{point}</span>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h3 className="text-xl font-medium mb-2">Outcome</h3>
          {data.outcome.map((paragraph) => (
            <p key={paragraph} className="mb-4">
              {paragraph}
            </p>
          ))}
        </section>
        <Image
          src={data.images[2].src}
          alt={data.images[2].alt}
          className="w-full rounded-lg"
          width={500}
          height={300}
        />
        <section className="pt-8 pb-8">
          <h3 className="text-xl font-medium mb-2 text-center">Reflection</h3>
          <p className="text-center text-balance max-w-[60ch] mx-auto">
            {data.reflection}
          </p>
        </section>
      </article>
    </div>
  );
}

export default LearnMorePage;
