import React from "react";
import Image from "next/image";
import { Images, Wallet } from "lucide-react";
import { FaCode } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";
import IMAGES from "@config/images";

const OurServices = ()  => {
  return (
    <div className="w-full my-5 flex flex-col gap-y-[10px] justify-center items-center">
      <div className="flex flex-col">
        <h1 className="md:text-3xl text-2xl text-[#468590] underline  font-bold z-10">
        خدماتنا
        </h1>
      </div>

      <div className="xl:w-[80%] p-6  w-[95%]   md:h-fill  bg-white rounded-[20px]   flex justify-center items-center ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-24">

          {/* begin of card */}
          <div className="max-w-lg md:max-w-xl max-h-md p-4 md:p-4  bg-[#eceff4]  border-gray-200 rounded-xl shadow-sm  flex flex-col items-center border">
            <div className="flex flex-col items-center">
            <img src={IMAGES.SEARCH_ILLUSTRATION} alt="" />
   
          
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white">
              محرك بحث ذكي
              </h5>
            
            </div>

            <p className=" text-md text-center  ">
            ابحث عن الوثائق القانونية من خلال صياغة طلبات باستخدام لغة بسيطة.
            </p>
          </div>
          {/* end of card */}


          <div className="max-w-lg md:max-w-xl max-h-md  md:p-4  bg-[#eceff4]   border-gray-200 rounded-xl shadow-sm  flex flex-col items-center border">
            <div className="flex flex-col items-center">
            <img src={IMAGES.NOTIFICATION_ILLUSTRATION} alt="" />
          
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white">
              نظام إشعارات
              </h5>
            
            </div>

            <p className=" text-md   text-center">
            استلم إشعارات في الوقت الفعلي حول التغييرات المختلفة في النصوص القانونية.
            </p>
          </div>


          <div className="max-w-lg md:max-w-xl max-h-md p-4 md:p-4 bg-[#eceff4]   border-gray-200 rounded-xl shadow-sm  flex flex-col items-center border">
            <div className="flex flex-col items-center">
            <img src={IMAGES.CHATBOT_ILLUSTRATION} alt="" />
   
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary dark:text-white">
              مساعد GPT
              </h5>
            
            </div>

            <p className=" text-md text-center ">
            ابحث عن معلومات، اطرح الأسئلة، وصاغ الوثائق القانونية الخاصة بك مع مساعدنا GPT.
            </p>
          </div>



        </div>
      </div>
    </div>
  );
};

export default OurServices;
