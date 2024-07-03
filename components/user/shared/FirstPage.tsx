import IMAGES from "@config/images";
import Image from "next/image";
import React from "react";

const FirstPage = () => {
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2  ">
      <div className="space-y-6  order-2 lg:order-1 ">
        <h1 className="text-4xl lg:text-5xl lg:leading-relaxed leading-normal text-primary font-bold">
          ابحث عن المعلومات القضائية التي ترغب فيها من خلال محرك البحث الذكي
          لدينا!
        </h1>
        <p className="text-[#468590] max-w-[40ch] font-medium text-xl">
          اختر بين الإجتهاد القضائي، البحث في الجريدة الرسمية، والبحث في أحكام المحكمة
          العليا.
        </p>
      </div>
      <div className="relative order-1 lg:order-2 min-h-[40vh] lg:min-h-[50vh] ">

        <img src={IMAGES.SPLASH_ILLUSTRATION} alt="" />
        <Image className="object-contain" alt="" fill src={IMAGES.FIRST_PAGE} />
      </div>





    </div>
  );
};

export default FirstPage;
