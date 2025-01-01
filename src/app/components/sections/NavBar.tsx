"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../../public/assets/icons/logo.svg";
import LightLogo from "../../../../public/assets/icons/footer-logo.svg";
import LightMode from "../../../../public/assets/icons/sun.svg";
import DarkMode from "../../../../public/assets/icons/cresent.svg";
import BlogIcon from "../../../../public/assets/icons/blog.svg";
import BlogIconLight from "../../../../public/assets/icons/blog-light.svg";
import ContactIcon from "../../../../public/assets/icons/contacts.svg";
import ContactIconLight from "../../../../public/assets/icons/contact-light.svg";
import ResumeIcon from "../../../../public/assets/icons/resume.svg";
import ResumeIconLight from "../../../../public/assets/icons/resume-light.svg";
import Link from "next/link";
import { useTheme, useToggleTheme } from "@/app/Context/themeContext";
import { useMenu } from "@/app/Context/MenuContext";

function NavBar() {
  const mode = useTheme();
  const toggleMode = useToggleTheme();
  const { dropDown, toggleDropDown } = useMenu();
  return (
    <div className="fixed left-2 right-2 flex justify-center py-5 z-10">
      <div className=" h-20 w-full max-w-screen-xl bg-light-gray-gradient top-3 border border-light-gray rounded-lg p-3 py-5 md:p-5 flex items-center justify-between shadow-lg backdrop-blur-md text-dark-purplish-blue dark:text-light-gray">
        <Link className="focus:animate-pulse h-9 px-2 outline-none" href={"/"}>
          <Image
            src={mode === "dark" ? LightLogo : Logo}
            alt="_alloy"
            className="h-7"
          />
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          <ul className="flex gap-8">
            <Link
              className="focus:animate-bounce h-9 px-2 outline-none"
              href={"/blog"}
            >
              <li className="font-medium hover:scale-105 py-1">Blog</li>
            </Link>
            <Link
              className="focus:animate-bounce h-9 px-2 outline-none"
              href={"/contacts"}
            >
              <li className="font-medium hover:scale-105 py-1">Contacts</li>
            </Link>
            <a
              download={"Okeoghene_John_Resumé"}
              className="focus:animate-bounce h-9 px-2 outline-none"
              href={"/assets/pdf/Okeoghene-John-web-developer-resume.pdf"}
            >
              <li className="font-medium py-1 hover:scale-105">Resumé</li>
            </a>
          </ul>
          <button className="mr-5 relative" onClick={toggleMode}>
            <Image
              src={DarkMode}
              alt="dark mode"
              className={`w-7 transition duration-500 ${
                mode === "light" ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src={LightMode}
              alt="light mode"
              className={`w-7 transition duration-500 absolute z-10 top-0 ${
                mode === "dark" ? "opacity-100 visible" : "opacity-0"
              }`}
            />
          </button>
        </div>
        <button
          onClick={toggleDropDown}
          className="cursor-pointer w-[30px] h-[30px] py-2 flex flex-col px-1 justify-between md:hidden"
        >
          <div
            className={`w-full h-0.5 rounded-full bg-dark-purplish-blue dark:bg-light-gray transition-transform duration-300 ${
              dropDown ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-full h-0.5 rounded-full bg-dark-purplish-blue dark:bg-light-gray transition-opacity duration-300 ${
              dropDown ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-full h-0.5 rounded-full bg-dark-purplish-blue dark:bg-light-gray transition-transform duration-300 ${
              dropDown ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </button>
      </div>
      <div
        className={`fixed md:hidden top-24 right-2 px-2 py-5 bounce transition-opacity duration-1000  ${
          dropDown
            ? "opacity-100 translate-y-0 visible"
            : "invisible opacity-0 -translate-y-4"
        }`}
      >
        <ul className="px-6 py-3 rounded-md bg-light-gray-gradient border backdrop-blur-2xl border-light-gray shadow-lg space-y-2 text-dark-purplish-blue dark:text-light-gray">
          <li className="hover:font-medium">
            <Link href={"/blog"} className="flex gap-2 items-center">
              <Image
                src={mode === "light" ? BlogIcon : BlogIconLight}
                alt="blog"
                className="w-6"
              />
              Blog
            </Link>
          </li>
          <li className="hover:font-medium">
            <Link href={"/contacts"} className="flex gap-2 items-center">
              <Image
                src={mode === "light" ? ContactIcon : ContactIconLight}
                alt="contacts"
                className="w-6"
              />
              Contacts
            </Link>
          </li>
          <li className="hover:font-medium">
            <a
              href={"/assets/pdf/Okeoghene-John-web-developer-resume.pdf"}
              download={"Okeoghene_John_Resumé"}
              className="flex gap-2 items-center"
            >
              <Image
                src={mode === "light" ? ResumeIcon : ResumeIconLight}
                alt="resume"
                className="h-6 mx-1"
              />
              Resumé
            </a>
          </li>
          <li className="hover:font-medium">
            <button
              className="pt-2 mt-2 border-t border-light-gray relative flex items-center gap-1"
              onClick={toggleMode}
            >
              <Image
                src={DarkMode}
                alt="dark mode"
                className={`w-5 transition duration-500 ${
                  mode === "light" ? "opacity-100" : "opacity-0"
                }`}
              />
              <Image
                src={LightMode}
                alt="light mode"
                className={`w-5 top-3 transition duration-500 absolute z-10 ${
                  mode === "dark" ? "opacity-100" : "opacity-0"
                }`}
              />
              <span className="pb-1">
                {mode === "light" ? "Dark mode" : "light mode"}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
