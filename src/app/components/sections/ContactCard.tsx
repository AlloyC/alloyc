import React from "react";
import Image from "next/image";
import EmailIcon from "../../../../public/assets/icons/email.svg";
import ChatIcon from "../../../../public/assets/icons/chat.svg";
import SocialMedia from "../../../../public/assets/icons/user.svg";
import Instagram from "../../../../public/assets/icons/instagram.svg";
import LinkedIn from "../../../../public/assets/icons/linkedin.svg";
import Link from "next/link";

function ContactCard() {
  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row ">
      <form
        action=""
        className="w-80 p-5 order-2 md:order-1 md:border-r-[1px] border-2 rounded-lg md:rounded-r-none border-gray"
      >
        <h3 className="mb-5 font-medium text-lg">Get In Touch</h3>
        <div className="space-y-2">
          <div className="pt-5 relative">
            <label htmlFor="name">
              <span className="absolute top-2 left-2 px-1 bg-white dark:bg-dark-theme">
                Name <span className="text-red-600">*</span>
              </span>
            </label>
            <input
              type="text"
              name="name"
              className="py-2 px-3 dark:bg-dark-theme rounded-md border border-gray w-full placeholder:italic placeholder:text-sm"
              placeholder="John Okeoghene"
            />
          </div>
          <div className="pt-5 relative">
            <label htmlFor="Email">
              <span className="absolute top-2 left-2 px-1 bg-white dark:bg-dark-theme">
                Email <span className="text-red-600">*</span>
              </span>
            </label>
            <input
              type="text"
              name="Email"
              className="py-2 px-3 dark:bg-dark-theme rounded-md border border-gray w-full placeholder:italic placeholder:text-sm"
              placeholder="okeoghenejohn10@gmail.com"
            />
          </div>
          <div className="pt-5 relative">
            <label htmlFor="Phone number">
              <span className="absolute top-2 left-2 px-1 bg-white dark:bg-dark-theme">
                Phone number
              </span>
            </label>
            <input
              type="number"
              name="Phone number"
              className="py-2 pl-12 pr-3 dark:bg-dark-theme rounded-md border border-gray w-full placeholder:italic appearance-none placeholder:text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="9053778947"
            />
          </div>
          <div className="pt-5 relative">
            <label htmlFor="details">
              <span className="absolute top-2 left-2 px-1 bg-white dark:bg-dark-theme">
                Details <span className="text-red-600">*</span>
              </span>
            </label>
            <textarea
              name="details"
              className="py-2 px-3 dark:bg-dark-theme min-h-28 rounded-md border border-gray w-full placeholder:italic placeholder:text-sm"
            />
          </div>
          <div className="flex px-3 pt-3 pb-5">
            <button className="w-full bg-dark-blue dark:bg-light-blue shadow-md font-medium text-light-gray py-2 rounded-md">
              Send
            </button>
          </div>
        </div>
      </form>
      <div className="w-80 p-5 pt-10 order-1 md:order-2 border-2 md:border-l-[1px] md:rounded-l-none rounded-lg border-gray flex flex-col gap-5 bg-light-gray text-dark-purplish-blue">
        <h3 className="font-medium text-lg">Other Ways to Reach Me</h3>
        <div className="">
          <div className="flex gap-2 items-center">
            <Image src={EmailIcon} className="w-6 h-5" alt="email me" />
            <span className="font-medium">Email</span>
          </div>
          <p className="text-sm">
            Prefer detailed conversations? Drop me an email at{" "}
            <a
              className="text-dark-blue dark:text-light-blue underline italic"
              href="mailto:okeoghenejohn10@gmail.com"
            >
              okeoghenejohn10@gmail.com
            </a>{" "}
            , and I&apos;ll get back to you within a day!
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <Image src={ChatIcon} className="w-6 h-6" alt="whatsapp" />
            <span className="font-medium">Chat</span>
          </div>
          <p className="text-sm">
            Need an instant response? Chat with on WhatsApp at{" "}
            <Link href={"https://wa.me/qr/YFOKYWR5R7PCN1"} className="text-dark-blue dark:text-light-blue">
              +2349053778947
            </Link>{" "}
            - I&apos;m available from 9am to 6pm.
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <Image src={SocialMedia} className="w-6 h-6" alt="socials" />
            <span className="font-medium">Social Media</span>
          </div>
          <p className="text-sm">
            Stay connected with me on social platforms, whether it&apos;s a
            quick chat or a collaboration idea, I&apos;m just a click away.
          </p>
          <div className="mt-4 space-y-1">
            <a href="https://linkedIn.com/in/okeoghene-john" className="inline-flex gap-2 text-sm underline text-dark-blue dark:text-light-blue">
              <Image src={LinkedIn} alt="linkedIn" className="filter invert" />
              https://linkedIn.com/in/okeoghene-john
            </a>
            <a href="https://instagram.com/_alloyc" className="inline-flex gap-2 text-sm underline text-dark-blue dark:text-light-blue">
              <Image src={Instagram} className="filter invert" alt="instagram" />
              https://instagram.com/_alloyc
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
