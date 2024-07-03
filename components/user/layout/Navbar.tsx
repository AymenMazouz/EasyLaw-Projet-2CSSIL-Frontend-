"use client";

import IMAGES from "@/config/images";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import Image from "next/image";
import { Button } from "@components/ui/button";
import { logout } from "@services/authentication.service";
import { User2Icon } from "lucide-react";
import { UserDataCookies } from "@typings/User";

const Navbar = ({
  userDataCookies,
}: {
  userDataCookies: UserDataCookies | null;
}) => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        if (showDiv) setShowDiv(false);
      } else {
        if (currentScrollPos < prevScrollPos - 30 || currentScrollPos < 10)
          if (!showDiv) setShowDiv(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
    document.body.style.overflow = open ? "auto" : "hidden";
  };
  const home={ name: "الرئيسية", href: "/" };
  const links = [
    
    { name: "عروض الإستعمال", href: "/offers" },
    { name: "محرك البحث", href: "/search" },
    { name: "الإشعارات", href: "/" },
    { name: "مساعد جي بي تي", href: "/" },
  ];

  return (
    <>
      {(showDiv || open) && (
        <nav
          className={`fixed  ${
            prevScrollPos > 10 || open ? "bg-white" : "bg-transparent"
          } z-50 w-full transition-all shadow-md  duration-300  top-0`}
        >
          <div
            className={`px-4 py-10 h-20   hidden items-center justify-around lg:flex w-full`}
          >
            <Link className={`w-[15%] flex items-center   `} href="/">
              <Image
                src={IMAGES.LOGO_DARK}
                width={292}
                height={48}
                className="h-16 w-auto"
                alt=""
              />
            </Link>
            <div className={`flex    items-center gap-10`}>
              <div className={`flex    items-center gap-10 font-semibold`}>
              <Link  href={home.href}>
                    <p className={`primary-gradient text-primary text-lg`}>
                      {home.name}
                    </p>
                  </Link>

                {links.map((link, index) => (
                  <Link key={index} href={userDataCookies ? link.href : "/auth/login"}>
                    <p className={`primary-gradient text-primary text-lg`}>
                      {link.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            {userDataCookies ? (
              <div className={`flex items-center justify-center gap-6`}>
                <Link href="/profile">
                  <div className="flex text-primary border-2 p-1 rounded-md border-primary items-center gap-4">
                    <User2Icon />
                  </div>
                </Link>
                <Link href="/">
                  <Button
                    onClick={() => logout()}
                    className="text-white transition-all duration-300 border-[1px] bg-primary hover:border-primary hover:text-primary hover:bg-white"
                  >
                    تسجيل الخروج
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-6">
                <Link href="/auth/login">
                  <Button className="text-white transition-all duration-300 border-[1px] bg-primary hover:border-primary hover:text-primary hover:bg-white">
                    تسجيل الدخول
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button
                    variant={"outline"}
                    className="text-primary border-primary"
                  >
                    إنشاء حساب
                  </Button>
                </Link>
              </div>
            )}
          </div>

          <div
            className={`  lg:hidden  relative flex w-full h-20  items-center justify-between px-6`}
          >
            <Link className={`w-1/2 md:w-1/4 flex items-center   `} href="/">
              <Image
                src={IMAGES.LOGO_DARK}
                width={292}
                height={48}
                className="h-14 w-auto"
                alt=""
              />
            </Link>
            <div className={`flex  items-center gap-8`}>
              <div className="flex items-center gap-4"></div>
              {open ? (
                <ImCancelCircle
                  onClick={toggleMenu}
                  size={25}
                  className="font-semibold cursor-pointer"
                />
              ) : (
                <RiMenuFoldLine
                  onClick={toggleMenu}
                  size={25}
                  className="font-semibold cursor-pointer"
                />
              )}
            </div>
            <div
              className={` absolute gap-6 py-12 transition-all duration-300 top-20  bg-white w-full min-h-screen h-10 overflow-auto left-0 ${
                open ? "flex  flex-col " : "translate-x-full"
              } `}
            >
              <div
                className={`flex  px-8   flex-col text-xl justify-around gap-4  font-semibold`}
              >
                {links.map((link, index) => (
                  <Link key={index} onClick={toggleMenu} href={link.href}>
                    <p className={`primary-gradient w-fit`}>{link.name}</p>
                  </Link>
                ))}
              </div>

              {userDataCookies ? (
                <div className="flex items-center justify-center gap-6">
                  <Link href="/profile">
                    <div className="flex text-primary border-2 p-1 rounded-md border-primary items-center gap-4">
                      <User2Icon />
                    </div>
                  </Link>
                  <Link href="/">
                    <Button
                      onClick={() => logout()}
                      className="text-white transition-all duration-300 border-[1px] bg-primary hover:border-primary hover:text-primary hover:bg-white"
                    >
                      تسجيل الخروج
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-6">
                  <Link href="/auth/register">
                    <Button
                      variant={"outline"}
                      className="text-primary border-primary"
                    >
                      إنشاء حساب
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button className="text-white transition-all duration-300 border-[1px] bg-primary hover:border-primary hover:text-primary hover:bg-white">
                      تسجيل الدخول
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
