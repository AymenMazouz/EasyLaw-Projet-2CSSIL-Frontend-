"use client";

import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@services/authentication.service";

import { ChevronDown } from "lucide-react";
import { Button } from "@components/ui/button";
import Image from "next/image";
import IMAGES from "@config/images";

const SideNav = ({ items }: { items: any[] }) => {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col justify-between space-y-6 w-full">
        <div className="flex flex-col space-y-6 w-full">
          <Link href="/admin/dashboard" className="mx-auto my-2">
            <Image src={IMAGES.LOGO_DARK} alt="logo" width={100} height={100} />
          </Link>

          <div className="flex flex-col space-y-2  md:px-6 ">
            {items.map((item, idx) => {
              return <MenuItem key={idx} item={item} />;
            })}
          </div>
        </div>
        <Link className="w-full" href="/">
          <Button
            onClick={() => {
              logout();
            }}
            className="rounded-none w-full"
            variant={"outline"}
          >
            تسجيل الخروج
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: any }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <Button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? "bg-zinc-100" : ""
            }`}
          >
            <div className="flex flex-row gap-4 items-center">
              {item.icon}
              <span className="font-semibold  text-xl">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <ChevronDown />
            </div>
          </Button>

          {subMenuOpen && (
            <div className="my-2 mr-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem: any, idx: number) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row  items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? "bg-zinc-100" : ""
          }`}
        >
          {item.icon}
          <span className="font-semibold mr-2  text-gray-600 text-lg ">
            {item.title}
          </span>
        </Link>
      )}
    </div>
  );
};
