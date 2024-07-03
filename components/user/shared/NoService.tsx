import { Button } from "@components/ui/button";
import IMAGES from "@config/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NoService = () => {
  return (
    <div className="flex flex-col gap-6 py-8 justify-center items-center">
      <Image
        src={IMAGES.NOT_AVAILABLE}
        alt="not available"
        width={300}
        height={300}
      />
      <p className="text-center text-sm bg-red-200 rounded-md max-w-[40ch] text-red-600 p-2">
        عرضك الحالي لا يشمل هذه الخدمة.
      </p>
      <Link href={`/offers`}>
        <Button>ترقية اشتراكك للحصول على هذه الخدمة</Button>
      </Link>
    </div>
  );
};

export default NoService;
