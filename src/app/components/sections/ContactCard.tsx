"use client";
import React, { useState } from "react";
import Image from "next/image";
import EmailIcon from "../../../../public/assets/icons/email.svg";
import ChatIcon from "../../../../public/assets/icons/chat.svg";
import SocialMedia from "../../../../public/assets/icons/user.svg";
import Instagram from "../../../../public/assets/icons/instagram.svg";
import LinkedIn from "../../../../public/assets/icons/linkedin.svg";
import Chevron from "../../../../public/assets/icons/chevron-right.svg";
import Link from "next/link";
import Flag from "react-world-flags";

function ContactCard() {
  const countries = [
    { code: "AF", shortName: "Afghanistan", phoneCode: "+93" },
    { code: "AL", shortName: "Albania", phoneCode: "+355" },
    { code: "DZ", shortName: "Algeria", phoneCode: "+213" },
    { code: "AS", shortName: "American Samoa", phoneCode: "+1-684" },
    { code: "AD", shortName: "Andorra", phoneCode: "+376" },
    { code: "AO", shortName: "Angola", phoneCode: "+244" },
    { code: "AI", shortName: "Anguilla", phoneCode: "+1-264" },
    { code: "AQ", shortName: "Antarctica", phoneCode: "+672" },
    { code: "AG", shortName: "Antigua and Barbuda", phoneCode: "+1-268" },
    { code: "AR", shortName: "Argentina", phoneCode: "+54" },
    { code: "AM", shortName: "Armenia", phoneCode: "+374" },
    { code: "AW", shortName: "Aruba", phoneCode: "+297" },
    { code: "AU", shortName: "Australia", phoneCode: "+61" },
    { code: "AT", shortName: "Austria", phoneCode: "+43" },
    { code: "AZ", shortName: "Azerbaijan", phoneCode: "+994" },
    { code: "BS", shortName: "Bahamas", phoneCode: "+1-242" },
    { code: "BH", shortName: "Bahrain", phoneCode: "+973" },
    { code: "BD", shortName: "Bangladesh", phoneCode: "+880" },
    { code: "BB", shortName: "Barbados", phoneCode: "+1-246" },
    { code: "BY", shortName: "Belarus", phoneCode: "+375" },
    { code: "BE", shortName: "Belgium", phoneCode: "+32" },
    { code: "BZ", shortName: "Belize", phoneCode: "+501" },
    { code: "BJ", shortName: "Benin", phoneCode: "+229" },
    { code: "BM", shortName: "Bermuda", phoneCode: "+1-441" },
    { code: "BT", shortName: "Bhutan", phoneCode: "+975" },
    { code: "BO", shortName: "Bolivia", phoneCode: "+591" },
    { code: "BA", shortName: "Bosnia and Herzegovina", phoneCode: "+387" },
    { code: "BW", shortName: "Botswana", phoneCode: "+267" },
    { code: "BR", shortName: "Brazil", phoneCode: "+55" },
    {
      code: "IO",
      shortName: "British Indian Ocean Territory",
      phoneCode: "+246",
    },
    { code: "BN", shortName: "Brunei Darussalam", phoneCode: "+673" },
    { code: "BG", shortName: "Bulgaria", phoneCode: "+359" },
    { code: "BF", shortName: "Burkina Faso", phoneCode: "+226" },
    { code: "BI", shortName: "Burundi", phoneCode: "+257" },
    { code: "CV", shortName: "Cabo Verde", phoneCode: "+238" },
    { code: "KH", shortName: "Cambodia", phoneCode: "+855" },
    { code: "CM", shortName: "Cameroon", phoneCode: "+237" },
    { code: "CA", shortName: "Canada", phoneCode: "+1" },
    { code: "KY", shortName: "Cayman Islands", phoneCode: "+1-345" },
    { code: "CF", shortName: "Central African Republic", phoneCode: "+236" },
    { code: "TD", shortName: "Chad", phoneCode: "+235" },
    { code: "CL", shortName: "Chile", phoneCode: "+56" },
    { code: "CN", shortName: "China", phoneCode: "+86" },
    { code: "CX", shortName: "Christmas Island", phoneCode: "+61" },
    { code: "CC", shortName: "Cocos (Keeling) Islands", phoneCode: "+61" },
    { code: "CO", shortName: "Colombia", phoneCode: "+57" },
    { code: "KM", shortName: "Comoros", phoneCode: "+269" },
    { code: "CG", shortName: "Congo", phoneCode: "+242" },
    {
      code: "CD",
      shortName: "Congo, Democratic Republic of the",
      phoneCode: "+243",
    },
    { code: "CK", shortName: "Cook Islands", phoneCode: "+682" },
    { code: "CR", shortName: "Costa Rica", phoneCode: "+506" },
    { code: "HR", shortName: "Croatia", phoneCode: "+385" },
    { code: "CU", shortName: "Cuba", phoneCode: "+53" },
    { code: "CW", shortName: "Curaçao", phoneCode: "+599" },
    { code: "CY", shortName: "Cyprus", phoneCode: "+357" },
    { code: "CZ", shortName: "Czech Republic", phoneCode: "+420" },
    { code: "DK", shortName: "Denmark", phoneCode: "+45" },
    { code: "DJ", shortName: "Djibouti", phoneCode: "+253" },
    { code: "DM", shortName: "Dominica", phoneCode: "+1-767" },
    { code: "DO", shortName: "Dominican Republic", phoneCode: "+1-809" },
    { code: "EC", shortName: "Ecuador", phoneCode: "+593" },
    { code: "EG", shortName: "Egypt", phoneCode: "+20" },
    { code: "SV", shortName: "El Salvador", phoneCode: "+503" },
    { code: "GQ", shortName: "Equatorial Guinea", phoneCode: "+240" },
    { code: "ER", shortName: "Eritrea", phoneCode: "+291" },
    { code: "EE", shortName: "Estonia", phoneCode: "+372" },
    { code: "SZ", shortName: "Eswatini", phoneCode: "+268" },
    { code: "ET", shortName: "Ethiopia", phoneCode: "+251" },
    { code: "FJ", shortName: "Fiji", phoneCode: "+679" },
    { code: "FI", shortName: "Finland", phoneCode: "+358" },
    { code: "FR", shortName: "France", phoneCode: "+33" },
    { code: "GF", shortName: "French Guiana", phoneCode: "+594" },
    { code: "PF", shortName: "French Polynesia", phoneCode: "+689" },
    { code: "GA", shortName: "Gabon", phoneCode: "+241" },
    { code: "GM", shortName: "Gambia", phoneCode: "+220" },
    { code: "GE", shortName: "Georgia", phoneCode: "+995" },
    { code: "DE", shortName: "Germany", phoneCode: "+49" },
    { code: "GH", shortName: "Ghana", phoneCode: "+233" },
    { code: "GI", shortName: "Gibraltar", phoneCode: "+350" },
    { code: "GR", shortName: "Greece", phoneCode: "+30" },
    { code: "GL", shortName: "Greenland", phoneCode: "+299" },
    { code: "GD", shortName: "Grenada", phoneCode: "+1-473" },
    { code: "GP", shortName: "Guadeloupe", phoneCode: "+590" },
    { code: "GU", shortName: "Guam", phoneCode: "+1-671" },
    { code: "GT", shortName: "Guatemala", phoneCode: "+502" },
    { code: "GN", shortName: "Guinea", phoneCode: "+224" },
    { code: "GW", shortName: "Guinea-Bissau", phoneCode: "+245" },
    { code: "GY", shortName: "Guyana", phoneCode: "+592" },
    { code: "HT", shortName: "Haiti", phoneCode: "+509" },
    { code: "HN", shortName: "Honduras", phoneCode: "+504" },
    { code: "HK", shortName: "Hong Kong", phoneCode: "+852" },
    { code: "HU", shortName: "Hungary", phoneCode: "+36" },
    { code: "IS", shortName: "Iceland", phoneCode: "+354" },
    { code: "IN", shortName: "India", phoneCode: "+91" },
    { code: "ID", shortName: "Indonesia", phoneCode: "+62" },
    { code: "IR", shortName: "Iran", phoneCode: "+98" },
    { code: "IQ", shortName: "Iraq", phoneCode: "+964" },
    { code: "IE", shortName: "Ireland", phoneCode: "+353" },
    { code: "IL", shortName: "Israel", phoneCode: "+972" },
    { code: "IT", shortName: "Italy", phoneCode: "+39" },
    { code: "JM", shortName: "Jamaica", phoneCode: "+1-876" },
    { code: "JP", shortName: "Japan", phoneCode: "+81" },
    { code: "JO", shortName: "Jordan", phoneCode: "+962" },
    { code: "KZ", shortName: "Kazakhstan", phoneCode: "+7" },
    { code: "KE", shortName: "Kenya", phoneCode: "+254" },
    { code: "KI", shortName: "Kiribati", phoneCode: "+686" },
    { code: "KP", shortName: "North Korea", phoneCode: "+850" },
    { code: "KR", shortName: "South Korea", phoneCode: "+82" },
    { code: "KW", shortName: "Kuwait", phoneCode: "+965" },
    { code: "KG", shortName: "Kyrgyzstan", phoneCode: "+996" },
    { code: "LA", shortName: "Laos", phoneCode: "+856" },
    { code: "LV", shortName: "Latvia", phoneCode: "+371" },
    { code: "LB", shortName: "Lebanon", phoneCode: "+961" },
    { code: "LS", shortName: "Lesotho", phoneCode: "+266" },
    { code: "LR", shortName: "Liberia", phoneCode: "+231" },
    { code: "LY", shortName: "Libya", phoneCode: "+218" },
    { code: "LI", shortName: "Liechtenstein", phoneCode: "+423" },
    { code: "LT", shortName: "Lithuania", phoneCode: "+370" },
    { code: "LU", shortName: "Luxembourg", phoneCode: "+352" },
    { code: "MO", shortName: "Macau", phoneCode: "+853" },
    { code: "MG", shortName: "Madagascar", phoneCode: "+261" },
    { code: "MW", shortName: "Malawi", phoneCode: "+265" },
    { code: "MY", shortName: "Malaysia", phoneCode: "+60" },
    { code: "MV", shortName: "Maldives", phoneCode: "+960" },
    { code: "ML", shortName: "Mali", phoneCode: "+223" },
    { code: "MT", shortName: "Malta", phoneCode: "+356" },
    { code: "MH", shortName: "Marshall Islands", phoneCode: "+692" },
    { code: "MQ", shortName: "Martinique", phoneCode: "+596" },
    { code: "MR", shortName: "Mauritania", phoneCode: "+222" },
    { code: "MU", shortName: "Mauritius", phoneCode: "+230" },
    { code: "YT", shortName: "Mayotte", phoneCode: "+262" },
    { code: "MX", shortName: "Mexico", phoneCode: "+52" },
    { code: "FM", shortName: "Micronesia", phoneCode: "+691" },
    { code: "MD", shortName: "Moldova", phoneCode: "+373" },
    { code: "MC", shortName: "Monaco", phoneCode: "+377" },
    { code: "MN", shortName: "Mongolia", phoneCode: "+976" },
    { code: "ME", shortName: "Montenegro", phoneCode: "+382" },
    { code: "MS", shortName: "Montserrat", phoneCode: "+1-664" },
    { code: "MA", shortName: "Morocco", phoneCode: "+212" },
    { code: "MZ", shortName: "Mozambique", phoneCode: "+258" },
    { code: "MM", shortName: "Myanmar", phoneCode: "+95" },
    { code: "NA", shortName: "Namibia", phoneCode: "+264" },
    { code: "NR", shortName: "Nauru", phoneCode: "+674" },
    { code: "NP", shortName: "Nepal", phoneCode: "+977" },
    { code: "NL", shortName: "Netherlands", phoneCode: "+31" },
    { code: "NC", shortName: "New Caledonia", phoneCode: "+687" },
    { code: "NZ", shortName: "New Zealand", phoneCode: "+64" },
    { code: "NI", shortName: "Nicaragua", phoneCode: "+505" },
    { code: "NE", shortName: "Niger", phoneCode: "+227" },
    { code: "NG", shortName: "Nigeria", phoneCode: "+234" },
    { code: "NU", shortName: "Niue", phoneCode: "+683" },
    { code: "NF", shortName: "Norfolk Island", phoneCode: "+672" },
    { code: "MK", shortName: "North Macedonia", phoneCode: "+389" },
    { code: "MP", shortName: "Northern Mariana Islands", phoneCode: "+1-670" },
    { code: "NO", shortName: "Norway", phoneCode: "+47" },
    { code: "OM", shortName: "Oman", phoneCode: "+968" },
    { code: "PK", shortName: "Pakistan", phoneCode: "+92" },
    { code: "PW", shortName: "Palau", phoneCode: "+680" },
    { code: "PS", shortName: "Palestine", phoneCode: "+970" },
    { code: "PA", shortName: "Panama", phoneCode: "+507" },
    { code: "PG", shortName: "Papua New Guinea", phoneCode: "+675" },
    { code: "PY", shortName: "Paraguay", phoneCode: "+595" },
    { code: "PE", shortName: "Peru", phoneCode: "+51" },
    { code: "PH", shortName: "Philippines", phoneCode: "+63" },
    { code: "PL", shortName: "Poland", phoneCode: "+48" },
    { code: "PT", shortName: "Portugal", phoneCode: "+351" },
    { code: "PR", shortName: "Puerto Rico", phoneCode: "+1-787" },
    { code: "QA", shortName: "Qatar", phoneCode: "+974" },
    { code: "RO", shortName: "Romania", phoneCode: "+40" },
    { code: "RU", shortName: "Russia", phoneCode: "+7" },
    { code: "RW", shortName: "Rwanda", phoneCode: "+250" },
    { code: "RE", shortName: "Réunion", phoneCode: "+262" },
    { code: "WS", shortName: "Samoa", phoneCode: "+685" },
    { code: "SM", shortName: "San Marino", phoneCode: "+378" },
    { code: "ST", shortName: "Sao Tome and Principe", phoneCode: "+239" },
    { code: "SA", shortName: "Saudi Arabia", phoneCode: "+966" },
    { code: "SN", shortName: "Senegal", phoneCode: "+221" },
    { code: "RS", shortName: "Serbia", phoneCode: "+381" },
    { code: "SC", shortName: "Seychelles", phoneCode: "+248" },
    { code: "SL", shortName: "Sierra Leone", phoneCode: "+232" },
    { code: "SG", shortName: "Singapore", phoneCode: "+65" },
    { code: "SX", shortName: "Sint Maarten", phoneCode: "+1-721" },
    { code: "SK", shortName: "Slovakia", phoneCode: "+421" },
    { code: "SI", shortName: "Slovenia", phoneCode: "+386" },
    { code: "SB", shortName: "Solomon Islands", phoneCode: "+677" },
    { code: "SO", shortName: "Somalia", phoneCode: "+252" },
    { code: "ZA", shortName: "South Africa", phoneCode: "+27" },
    { code: "SS", shortName: "South Sudan", phoneCode: "+211" },
    { code: "ES", shortName: "Spain", phoneCode: "+34" },
    { code: "LK", shortName: "Sri Lanka", phoneCode: "+94" },
    { code: "SD", shortName: "Sudan", phoneCode: "+249" },
    { code: "SR", shortName: "Suriname", phoneCode: "+597" },
    { code: "SE", shortName: "Sweden", phoneCode: "+46" },
    { code: "CH", shortName: "Switzerland", phoneCode: "+41" },
    { code: "SY", shortName: "Syria", phoneCode: "+963" },
    { code: "TW", shortName: "Taiwan", phoneCode: "+886" },
    { code: "TJ", shortName: "Tajikistan", phoneCode: "+992" },
    { code: "TZ", shortName: "Tanzania", phoneCode: "+255" },
    { code: "TH", shortName: "Thailand", phoneCode: "+66" },
    { code: "TL", shortName: "Timor-Leste", phoneCode: "+670" },
    { code: "TG", shortName: "Togo", phoneCode: "+228" },
    { code: "TK", shortName: "Tokelau", phoneCode: "+690" },
    { code: "TO", shortName: "Tonga", phoneCode: "+676" },
    { code: "TT", shortName: "Trinidad and Tobago", phoneCode: "+1-868" },
    { code: "TN", shortName: "Tunisia", phoneCode: "+216" },
    { code: "TR", shortName: "Turkey", phoneCode: "+90" },
    { code: "TM", shortName: "Turkmenistan", phoneCode: "+993" },
    { code: "TC", shortName: "Turks and Caicos Islands", phoneCode: "+1-649" },
    { code: "TV", shortName: "Tuvalu", phoneCode: "+688" },
    { code: "UG", shortName: "Uganda", phoneCode: "+256" },
    { code: "UA", shortName: "Ukraine", phoneCode: "+380" },
    { code: "AE", shortName: "United Arab Emirates", phoneCode: "+971" },
    { code: "GB", shortName: "United Kingdom", phoneCode: "+44" },
    { code: "US", shortName: "United States", phoneCode: "+1" },
    { code: "UY", shortName: "Uruguay", phoneCode: "+598" },
    { code: "UZ", shortName: "Uzbekistan", phoneCode: "+998" },
    { code: "VU", shortName: "Vanuatu", phoneCode: "+678" },
    { code: "VE", shortName: "Venezuela", phoneCode: "+58" },
    { code: "VN", shortName: "Vietnam", phoneCode: "+84" },
    { code: "EH", shortName: "Western Sahara", phoneCode: "+212" },
    { code: "YE", shortName: "Yemen", phoneCode: "+967" },
    { code: "ZM", shortName: "Zambia", phoneCode: "+260" },
    { code: "ZW", shortName: "Zimbabwe", phoneCode: "+263" },
  ];

  const [code, setCode] = useState("NG");
  const [number, setNumber] = useState("+234");
  const [phoneNumber, setPhoneNumber] = useState("+234");

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    let phoneCode: string | undefined;
    const option = e.target as HTMLButtonElement;
    const value = option.dataset.value;
    setCode(value || "NG");
    // console.log("value", value);
    if (value) {
      phoneCode = countries.find(
        (country) => country.code.toLowerCase() === value.toLowerCase()
      )?.phoneCode;
    }
    if (phoneCode) {
      setNumber(phoneCode);
      setPhoneNumber((prev) =>
        phoneCode ? prev.replace(number, phoneCode) : prev
      );
    }
    setShowFlags(false)
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const phoneCode = countries.find(
      (country) => country.phoneCode === value
    )?.phoneCode;

    // console.log(phoneCode);
    if (phoneCode) {
      setNumber(phoneCode);
      setCode(
        countries.find((country) => country.phoneCode === value)?.code || "NG"
      );
    }
    // const phoneCode =
    //   countries.find((country) => country.code === code)?.phoneCode || "+234";

    setPhoneNumber(
      value.includes("+") ? e.target.value : number + e.target.value
    );
  };

  const [showFlags, setShowFlags] = useState(false)

  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row ">
      <form
          action="https://formspree.io/f/mgejgnbd"
          method="POST"
        className="w-80 p-5 relative order-2 md:order-1 md:border-r-[1px] border-2 rounded-lg md:rounded-r-none border-gray"
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
          <div className="pt-5">
            <div className={`absolute rounded-md border border-gray top-[17rem] transition duration-300 ${showFlags ? "opacity-1 z-50":"opacity-0 -z-50"} h-60 `}>
            <ul
              id="country"
              className="py-2 px-3 dark:bg-dark-theme  w-min placeholder:italic placeholder:text-sm flex flex-col overflow-y-auto gap-2 bg-light-theme scrollbar"
            >
              {countries.map((country) => (
              <li
                key={country.code}
                className=" cursor-pointer hover:bg-gray-100 border-b border-light-gray last:border-b-0 dark:hover:bg-dark-theme w-56"
              >
                <button 
                data-value={country.code} className="inline-flex items-center gap-2 text-nowrap" onClick={(e) => {e.preventDefault(); handleSelect(e)}}>
                <Flag code={country.code} className="w-8 h-8" />
                {country.shortName}
                </button>
              </li>
              ))}
            </ul>
            </div>
            <div className="relative pt-3 -mt-3">
            <label htmlFor="Phone number">
              <span className="absolute top-0 left-2 px-1 bg-white dark:bg-dark-theme">
                Phone number
              </span>
            </label>
            <div className="flex items-center rounded-md border bg-light-theme dark:bg-dark-theme border-gray gap-2">
              <div onClick={() => {setShowFlags(!showFlags)}} className="flex items-center border-r border-gray gap-2 p-1">
                  <Flag code={code} className="w-8" />
                  <Image src={Chevron} className={`w-3 h-3 transition duration-300 ${ showFlags ? "rotate-90" : "rotate-0"}`} alt="arrow down" />
              </div>
              <input
                type="tel"
                onChange={handlePhoneNumber}
                value={phoneNumber}
                name="Phone number"
                className="py-2 pl-1 pr-3 focus:border-b  outline-none dark:bg-dark-theme border-gray w-full placeholder:italic appearance-none placeholder:text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="9053778947"
              />
            </div>
            </div>
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
            <input type="submit" className="w-full bg-dark-blue dark:bg-light-blue shadow-md font-medium text-light-gray py-2 rounded-md" value={"Send"}/>
            {/* <button className="w-full bg-dark-blue dark:bg-light-blue shadow-md font-medium text-light-gray py-2 rounded-md">
              Send
            </button> */}
          </div>
        </div>
      </form>
      <div className="w-80 p-5 pt-10 order-1 md:order-2 border-2 md:border-l-[1px] md:rounded-l-none rounded-lg border-gray flex flex-col gap-5 bg-light-gray bg-opacity-30 dark:bg-opacity-55 dark:bg-slate-700 dark:text-light-gray text-dark-purplish-blue">
        <h3 className="font-medium text-lg">Other Ways to Reach Me</h3>
        <div className="">
          <div className="flex gap-2 items-center">
            <Image src={EmailIcon} className="w-6 h-5 dark:filter dark:invert dark:opacity-70" alt="email me" />
            <span className="font-medium">Email</span>
          </div>
          <p className="text-sm">
            Prefer detailed conversations? Drop me an email at{" "}
            <a
              className="text-transparent bg-gradient-blue bg-clip-text dark:text-light-blue-DM underline italic"
              href="mailto:okeoghenejohn10@gmail.com"
            >
              okeoghenejohn10@gmail.com
            </a>{" "}
            , and I&apos;ll get back to you within a day!
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <Image src={ChatIcon} className="w-6 h-6 dark:filter dark:invert dark:opacity-70" alt="whatsapp" />
            <span className="font-medium">Chat</span>
          </div>
          <p className="text-sm">
            Need an instant response? Chat with on WhatsApp at{" "}
            <Link
              href={"https://wa.me/qr/YFOKYWR5R7PCN1"}
              className="text-transparent bg-gradient-blue bg-clip-text dark:text-light-blue-DM"
            >
              +2349053778947
            </Link>{" "}
            - I&apos;m available from 9am to 6pm.
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <Image src={SocialMedia} className="w-6 h-6 dark:filter dark:invert dark:opacity-70" alt="socials" />
            <span className="font-medium">Social Media</span>
          </div>
          <p className="text-sm">
            Stay connected with me on social platforms, whether it&apos;s a
            quick chat or a collaboration idea, I&apos;m just a click away.
          </p>
          <div className="mt-4 space-y-1">
            <a
              href="https://linkedIn.com/in/okeoghene-john"
              className="inline-flex gap-2 text-sm underline text-transparent bg-gradient-blue bg-clip-text dark:text-light-blue-DM"
            >
              <Image src={LinkedIn} alt="linkedIn" className="filter invert opacity-80 dark:invert-0" />
              https://linkedIn.com/in/okeoghene-john
            </a>
            <a
              href="https://instagram.com/_alloyc"
              className="inline-flex gap-2 text-sm underline text-transparent bg-gradient-blue bg-clip-text dark:text-light-blue-DM"
            >
              <Image
                src={Instagram}
                className="filter invert opacity-80 dark:invert-0"
                alt="instagram"
              />
              https://instagram.com/_alloyc
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
