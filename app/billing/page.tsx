import ServerSideNavbar from "@components/user/layout/ServerSideNavbar";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/ui/button";
import getPlans from "@actions/getPlans";
import IMAGES from "@config/images";
import InvoiceAccordion from "@components/admin/Tarification management/subscription";
import getSubs from "@actions/getSubscriptions";
async function page() {
  const sub = await getSubs();

  if (!sub) {
    return (
      <div className="flex flex-col gap-6 justify-center items-center">
        <Image
          src={IMAGES.SEARCH_ERROR}
          alt="Search error"
          width={300}
          height={300}
        />
        <p className="text-center text-sm bg-red-200 rounded-md max-w-[40ch] text-red-600 p-2">
          يرجى التحقق من البيانات المدخلة
        </p>
        <Link href={`/`}>
          <Button>الذهاب إلى الصفحة الرئيسية</Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="w-full text-primary flex gap-5 flex-col p-5">
      <ServerSideNavbar />
      <div className="w-full  p-5 flex justify-center  items-center">
        <div className="w-1/3 flex flex-col gap-y-16">
          <h1 className="text-7xl text-primary font-bold">فواتيري</h1>
          <p className="text-sm text-[#316E83]">
            اطلع على جميع فواتير إشتراكاتك في خدمات EasyLaw
          </p>
        </div>
        <Image
          src={IMAGES.BILLING_ILLUSTRATION}
          width={400}
          height={400}
          alt="bills"
        ></Image>
      </div>
      <div className="w-full h-[2px] bg-primary"></div>
    </div>
  );
}

export default page;
