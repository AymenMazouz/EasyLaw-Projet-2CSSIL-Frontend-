import IMAGES from "@config/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiX,
} from "react-icons/bi";

const Footer = () => {
  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "عروض الإستعمال", href: "/" },
    { name: "محرك البحث", href: "/search" },
    { name: "الإشعارات", href: "/" },
    { name: "مساعد جي بي تي", href: "/" },
  ];
  return (
    <div
      className={`bg-primary mt-8 py-8 z-50 flex-2 text-white  px-[5%] gap-y-8  flex flex-wrap    justify-around items-center   w-full`}
    >
      <Link href="/">
        <Image
          src={IMAGES.LOGO_DARK}
          alt="logo"
          width={150}
          height={70}
          className="h-20 object-contain invert brightness-0"
        />
      </Link>
      <div className="space-3">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <p className="hover:text-slate-300 transition-all duration-500">
              {link.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="space-y-1 md:w-fit w-full md:space-y-2">
        <div className="md:grid md:w-fit w-full md:grid-cols-2 flex  gap-4 items-center justify-center">
          <Link target="_blank" href="">
            <BiLogoFacebook
              size={25}
              className=" hover:text-slate-500 transition-all duration-500"
            />
          </Link>
          <Link target="_blank" href="">
            <BiLogoInstagram
              size={25}
              className=" hover:text-slate-500 transition-all duration-500"
            />
          </Link>
          <Link target="_blank" href="">
            <BiLogoLinkedin
              size={25}
              className=" hover:text-slate-500 transition-all duration-500"
            />
          </Link>
          <Link target="_blank" href="">
            <BsTwitterX
              size={20}
              className=" hover:text-slate-500 transition-all duration-500"
            />
          </Link>
        </div>
      </div>
      <p className="text-gray-300 text-center text-sm w-full">
        جميع الحقوق محفوظة لموقع EasyLaw © {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
