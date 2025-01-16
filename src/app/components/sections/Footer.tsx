import Image from "next/image";
import React from "react";
import Logo from "../../../../public/assets/icons/footer-logo.svg";
import Whatsapp from "../../../../public/assets/icons/whatsapp.svg";
import Instagram from "../../../../public/assets/icons/instagram.svg";
import LinkedIn from "../../../../public/assets/icons/linkedin.svg";
import GitHub from "../../../../public/assets/icons/github.svg";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-footer-gradient dark:bg-dark-footer-gradient min-h-60 max-w-screen-xl w-screen px-10 pt-5 pb-3 ">
      <div className="flex flex-col md:flex-row w-full mt-7 text-light-gray md:items-baseline">
        <div className="max-w-96 mx-auto">
          <Image src={Logo} className="w-12 mb-6" alt="_alloy" />
          <h3 className=" font-medium text-lg">
            Let&apos;s Build Something Together
          </h3>
          <p className="my-3 text-balance">
            Feel free to reach if you&apos;re looking for a developer, have a
            question , or just want to connect.
          </p>
          <a
            className="underline italic"
            href="mailto:okeoghenejohn10@gmail.com"
          >
            okeoghenejohn10@gmail.com
          </a>
        </div>
        <div className="py-2 mt-4 md:mt-0 border-t md:border-t-0 md:pl-16 md:border-l border-light-gray border-opacity-65 mx-auto w-full max-w-96">
          <h5 className="font-medium">Links</h5>
          <ul className="grid grid-cols-2 max-w-80 mt-4">
            <li>
              <Link className="hover:scale-105 hover:font-medium" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:scale-105 hover:font-medium"
                href={"/#about-me"}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                className="hover:scale-105 hover:font-medium"
                href={"/blog"}
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                className="hover:scale-105 hover:font-medium"
                href={"/assets/pdf/Okeoghene-John-web-developer-resume.pdf"}
                download={"Okeoghe_John_Resumé.pdf"}
              >
                Resumé
              </a>
            </li>
            <li>
              <Link
                className="hover:scale-105 hover:font-medium"
                href={"/#projects"}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:scale-105 hover:font-medium"
                href={"/#skills"}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:scale-105 hover:font-medium"
                href={"/contacts"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex flex-col md:flex-row w-full mt-7 text-light-gray md:items-baseline">
        <div className="max-w-96 py-2 mx-auto w-full inline-flex gap-2 items-center">
          <div className="w-28 border-t border-light-gray opacity-65"></div>
          <Link href={"https://wa.me/qr/YFOKYWR5R7PCN1"}>
            <Image src={Whatsapp} className="w-4" alt="whatsaspp" />
          </Link>
          <Link href={"https://instagram.com/_alloyc"}>
            <Image src={Instagram} className="w-4" alt="Instagram" />
          </Link>
          <Link href={"https://linkedIn.com/in/okeoghene-john"}>
            <Image src={LinkedIn} className="w-4" alt="linkedIn" />
          </Link>
          <Link href={"https://github.com/AlloyC"}>
            <Image src={GitHub} className="w-4" alt="github" />
          </Link>
        </div>
        <div className="w-full max-w-96 h-1 mx-auto"></div>
      </div>
      <div className="max-w-96 md:hidden py-2 mt-5 mx-auto w-full inline-flex gap-2 items-center">
        <div className="w-28 border-t border-light-gray opacity-65"></div>
        <Link href={"https://wa.me/qr/YFOKYWR5R7PCN1"}>
          <Image src={Whatsapp} className="w-4" alt="whatsaspp" />
        </Link>
        <Link href={"https://instagram.com/_alloyc"}>
          <Image src={Instagram} className="w-4" alt="Instagram" />
        </Link>
        <Link href={"https://linkedIn.com/in/okeoghene-john"}>
          <Image src={LinkedIn} className="w-4" alt="linkedIn" />
        </Link>
        <Link href={"https://github.com/AlloyC"}>
          <Image src={GitHub} className="w-4" alt="github" />
        </Link>
      </div>
      <hr className="text-light-gray opacity-70 my-2" />
      <div className="mx-auto text-light-gray text-center">
        copyright &copy; {year} John Okeoghene
      </div>
    </footer>
  );
}

export default Footer;
