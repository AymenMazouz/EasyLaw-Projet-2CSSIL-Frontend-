import { Button } from "@components/ui/button";
import IMAGES from "@config/images";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-row-reverse bg-[#eceff4] rounded-xl gap-2 px-10 py-12 mt-5 justify-center">
      <div className="flex flex-col w-1/2 gap-3">
        <p className="text-3xl font-bold  ">
          {" "}
          حول{" "}
          <span className="font-extrabold text-4xl text-[#468590]">
            {" "}
            EasyLaw{" "}
          </span>{" "}
        </p>

        <p>
          اكتشف EasyLaw، منصة الذكاء الاصطناعي الخاصة بمراقبة التشريعات
          القانونية في الجزائر. مع EasyLaw، يمكنك الوصول إلى مكتبة واسعة من
          الوثائق القانونية، حيث يمكنك البحث واستعراض جميع المعلومات اللازمة
          بسهولة في بضع نقرات. ابق مطلعًا دائمًا على آخر التغييرات التشريعية من
          خلال إشعاراتنا في الوقت الفعلي.
        </p>
        <p>
          استخدم مساعدنا المتقدم GPT لطرح أسئلة محددة أو صياغة الوثائق القانونية
          الخاصة بك بسهولة. تم تصميم منصتنا لتكون بديهية وذكية، مما يوفر لك
          تجربة مستخدم مثالية في كل استخدام.
        </p>
        <p>
          استفد من التحديثات المنتظمة لضمان الوصول إلى أحدث وأدق البيانات
          القانونية. بسهولة البحث في القوانين مع EasyLaw وتخلص من الإجراءات
          الإدارية المعقدة.
        </p>

        <Button className="w-52 mx-auto font-extrabold text-2xl rounded-tr-3xl rounded-bl-3xl  mt-4 py-8">
          ابدأ
        </Button>
      </div>

      <div className="w-1/3 ">
        <img src={IMAGES.JUDGE_ILLUSTRATION} alt="judge" />
      </div>
    </div>
  );
};

export default AboutUs;
