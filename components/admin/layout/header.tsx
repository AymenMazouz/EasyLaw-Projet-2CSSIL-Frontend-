"use client";

import React from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Image from "next/image";
import IMAGES from "@config/images";
import { User, UserDataCookies } from "@typings/User";

const Header = ({ user }: { user: User | null }) => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-14 items-center justify-between md:justify-end px-4">
        <div className="flex items-center md:hidden space-x-4">
          <Link className={`flex items-center   `} href="/">
            <Image
              src={IMAGES.LOGO_DARK}
              width={125}
              height={125}
              className="h-10 w-auto"
              alt=""
            />
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="h-8 w-8 p-1 overflow-hidden rounded-full relative bg-zinc-300 flex items-center justify-center text-center">
            {user && (
              <span className="font-semibold text-xs">
                {user.firstname.toUpperCase().charAt(0)}
                {user.lastname.toUpperCase().charAt(0)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
