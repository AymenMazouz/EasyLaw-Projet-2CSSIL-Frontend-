import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/ui/button";
import IMAGES from "@config/images";
import AdminPlansDataTable from "@components/admin/Tarification management/data-table";
import getPlans from "@actions/getPlans";

const page = async () => {
  const plans = await getPlans();

  if (!plans) {
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
        <Link href={`/admin/users`}>
          <Button>الذهاب إلى الصفحة الرئيسية</Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="text-primary">
      <div className="w-full flex  p-4 justify-between">
        <h1 className="font-bold lg:text-3xl text-2xl">إدارة العروض</h1>
        <Link href="./tarification/tarificationManagement">
        <Button>إضافة عرض</Button>
        </Link>
        
      </div>
      <AdminPlansDataTable data={plans} />

    </div>
  );
};

export default page;
