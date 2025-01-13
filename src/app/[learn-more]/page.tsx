"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ChevronRight from "../../../public/assets/icons/chevron-right.svg";
import ChevronRightLight from "../../../public/assets/icons/chevron-right-light.svg";
import { useTheme } from "@/app/Context/themeContext";
import ProjectCard from "../components/utils/ProjectCard";

import JustBuy from "../../../public/assets/images/just-buy.jpg";
import Fupps from "../../../public/assets/images/fupps.jpg";
import SectionHeader from "../components/utils/SectionHeader";

interface LearnMoreData {
  name: string;
  title: string;
  description: string;
  overview: string;
  links: { name: string; url: string }[];
  technologies: string[];
  Role: { title: string; responsibilities: string[] };
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
  const [nextTab, setNextTab] = useState("");
  const [currentTab, setCurrentTab] = useState("");
  const mode = useTheme();

  useEffect(() => {
    (async () => {
      if (url === "/just-buy") {
        setNextTab("/fupps");
        setCurrentTab("/just-buy");
      } else if (url === "/fupps") {
        setNextTab("/just-buy");
        setCurrentTab("/fupps");
      }
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
        <div className="flex gap-16 mt-8">
          <section className="">
            <h4 className=" leading-10 text-lg font-medium">Overview:</h4>
            <p className="max-w-[72ch] min-w-[50ch] text-pretty">
              {data.overview}
            </p>
            <div className="mt-6 flex gap-20">
              {data.links.map((link) => (
                <Link
                  key={link.url}
                  className="underline text-purplish-blue dark:text-sea-blue font-medium"
                  href={link.url}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </section>
          <Image
            src={data.images[0].src}
            alt={data.images[0].alt}
            className="w-full rounded-lg"
            width={500}
            height={300}
          />
        </div>
        <section className="w-full mt-16">
          <h3 className="text-xl font-medium mb-2">
            Chanllenges and Solutions
          </h3>
          <div className="flex flex-wrap gap-x-8 gap-y-5 mb-4">
            {data.challenge.map((paragraph) => (
              <p
                key={paragraph}
                className="flex-1 min-w-[40ch] max-w-[72ch] text-pretty indent-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
        <div className="flex gap-16 mt-10 justify-between w-full">
          <div className="flex-1 space-y-16">
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
            <section className="">
              <h3 className="text-xl font-medium">My Role</h3>
              <p className="text-pretty">{data.Role.title}</p>
              <ul className="space-y-2 pl-4 pt-4">
                {data.Role.responsibilities.map((role) => {
                  return (
                    <li
                      key={role}
                      className="flex justify-start gap-3 items-start"
                    >
                      <span className="rounded-full w-3 h-4 border-2 mt-2 border-purplish-blue dark:border-sea-blue"></span>
                      <span className="flex-1">{role}</span>
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
              src={data.images[2].src}
              alt={data.images[2].alt}
              className="w-full rounded-lg"
              width={500}
              height={300}
            />
            <section className="">
              <h3 className="text-xl font-medium">Features</h3>
              <ul className="space-y-2 pl-4 pt-4">
                {data.features.map((paragraph) => {
                  return (
                    <li
                      key={paragraph}
                      className="flex justify-start gap-3 items-start"
                    >
                      <span className="rounded-full mt-1 w-3 h-4 border-2 border-purplish-blue dark:border-sea-blue"></span>
                      <span className="flex-1">{paragraph}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
            {/* <section>
              <h3 className="text-xl font-medium mb-2">Features</h3>
              {data.features.map((paragraph) => (
                <p key={paragraph} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section> */}
            <Image
              src={data.images[3].src}
              alt={data.images[3].alt}
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
            {data.links.map((link) => (
              <Link
                key={link.url}
                className="underline text-purplish-blue dark:text-sea-blue font-medium"
                href={link.url}
              >
                {data.links[0].name}
              </Link>
            ))}
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
        <section className="">
          <h3 className="text-xl font-medium">Features</h3>
          <ul className="space-y-2 pl-4 pt-4">
            {data.features.map((paragraph) => {
              return (
                <li
                  key={paragraph}
                  className="flex justify-start gap-3 items-start"
                >
                  <span className="rounded-full mt-1 w-3 h-4 border-2 border-purplish-blue dark:border-sea-blue"></span>
                  <span className="flex-1">{paragraph}</span>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="w-full mt-16">
          <h3 className="text-xl font-medium mb-2">
            Chanllenges and Solutions
          </h3>
          <div className="flex-col gap-y-5 mb-4">
            {data.challenge.map((paragraph) => (
              <p
                key={paragraph}
                className="flex-1 min-w-[40ch] max-w-[72ch] text-pretty indent-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
        <Image
          src={data.images[1].src}
          alt={data.images[1].alt}
          className="w-full"
          width={500}
          height={300}
        />
        <section className="">
          <h3 className="text-xl font-medium">My Role</h3>
          <p className="text-pretty">{data.Role.title}</p>
          <ul className="space-y-2 pl-4 pt-4">
            {data.Role.responsibilities.map((role) => {
              return (
                <li key={role} className="flex justify-start gap-3 items-start">
                  <span className="rounded-full w-3 h-4 border-2 mt-2 border-purplish-blue dark:border-sea-blue"></span>
                  <span className="flex-1">{role}</span>
                </li>
              );
            })}
          </ul>
        </section>
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
      <div className="py-8 mx-auto w-full max-w-screen-lg">
        <div className="flex justify-center mb-10">
        <SectionHeader text="Other projects" />
          </div>
        <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-8">
          {!currentTab.includes("/just-buy") && (
            <ProjectCard
              projectDescription="JustBuy is an e-commerce platform designed to connect local vendors with nearby customers, facilitating the discovery and access to locally produced goods and services."
              projectIMG={JustBuy}
              projectTitle="JustBuy"
              url="/just-buy"
            />
          )}
          {!currentTab.includes("/fupps") && (
            <ProjectCard
              projectDescription="Fupps is a platform for accessing academic materials and sharing knowledge through blogs, organized by department and level for easy access."
              projectIMG={Fupps}
              projectTitle="Fupps"
              url="/fupps"
            />
          )}
          {!currentTab.includes("/fupps2") && (
            <ProjectCard
              projectDescription="Lorem ipsum dolor sit amet nisi, amet aliquam delectus accusantium eaque consectetur officia minus aperiam deserunt repudiandae pariatur fugiat."
              projectIMG={Fupps}
              projectTitle="Fupps"
              url="/fupps"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LearnMorePage;
