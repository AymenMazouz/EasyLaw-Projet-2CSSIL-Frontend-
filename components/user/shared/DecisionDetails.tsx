import SupremeCourtDecision from "@typings/SupremeCourtDecision";
import React from "react";

const DecisionDetails = ({ decision }: { decision: SupremeCourtDecision }) => {
  return (
    <div className="space-y-8 rounded-md bg-slate-100 lg:w-[70%] py-8 px-3 md:px-[2%]">
      <p className="text-primary text-center font-bold text-xl">
        الجمهورية الجزائرية الديمقراطية الشعبية
      </p>
      <h1 className="text-primary font-bold text-2xl">{`القرار رقم ${decision.number} الصادر بتاريخ ${decision.date}`}</h1>
      <div className="space-y-1">
        <div className="flex  ">
          <p className="font-medium  min-w-[15ch] text-[#2C3E54]">
            رقم القرار:
          </p>
          <p className="text-[#316E83] font-semibold">{decision.number}</p>
        </div>
        <div className="flex">
          <p className="font-medium min-w-[15ch] text-[#2C3E54]">
            تاريخ القرار:
          </p>
          <p className="text-[#316E83] font-semibold">{decision.date}</p>
        </div>
        <div className="flex ">
          <p className="font-medium min-w-[15ch] text-[#2C3E54]">الموضوع:</p>
          <p className="text-[#316E83] font-semibold">{decision.subject}</p>
        </div>
        <div className="flex ">
          <p className="font-medium min-w-[15ch] text-[#2C3E54]">الأطراف:</p>
          <p className="text-[#316E83] font-semibold">{decision.parties}</p>
        </div>
        <div className="flex ">
          <p className="font-medium min-w-[15ch] text-[#2C3E54]">
            الكلمات الأساسية:
          </p>
          <p className="text-[#316E83] font-semibold">
            {decision.keywords.join(" - ")}
          </p>
        </div>
        <div className="flex ">
          <p className="font-medium min-w-[15ch] text-[#2C3E54]">
            المرجع القانوني:
          </p>
          <p className="text-[#316E83] font-semibold">{decision.reference}</p>
        </div>
      </div>
      <div className="space-y-6">
        {decision.principle && (
          <div>
            <p className="font-semibold text-lg text-[#316E83] ">المبدأ:</p>
            <p className="text-[#2C3E54] font-medium">{decision.principle}</p>
          </div>
        )}

        <div>
          <p className="font-semibold text-lg text-[#316E83] ">
            وجه الطعن المثار من الطاعن المرتبط بالمبدأ:
          </p>
          <p className="text-[#2C3E54] font-medium">
            {decision.ground_of_appeal}
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg text-[#316E83] ">
            رد المحكمة العليا عن الوجه المرتبط بالمبدأ:{" "}
          </p>
          <p className="text-[#2C3E54] font-medium">
            {decision.supreme_court_response}
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg text-[#316E83] ">منطوق القرار:</p>
          <p className="text-[#2C3E54] font-medium">{decision.verdict}</p>
        </div>
        {decision.president && (
          <div>
            <p className="font-semibold text-lg text-[#316E83] ">الرئيس:</p>
            <p className="text-[#2C3E54] font-medium">{decision.president}</p>
          </div>
        )}
        {decision.reporting_judge && (
          <div>
            <p className="font-semibold text-lg text-[#316E83] ">
              القاضي المحرر:
            </p>
            <p className="text-[#2C3E54] font-medium">
              {decision.reporting_judge}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DecisionDetails;
