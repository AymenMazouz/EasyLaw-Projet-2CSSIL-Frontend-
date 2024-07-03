import ConseilDecision from "@typings/ConseilDecision";
import React from "react";

const ConseilDecisionDetails = ({ decision }: { decision: ConseilDecision }) => {

    return (
        <div className="flex flex-col space-y-8 rounded-md bg-slate-100 lg:w-[70%] py-8 px-3 md:px-[2%]">
            <div className="space-y-8">
                <p className="text-primary text-center font-bold text-xl">
                    الجمهورية الجزائرية الديمقراطية الشعبية
                </p>
                <h1 className="text-primary font-bold text-2xl">{`القرار رقم ${decision.number} الصادر بتاريخ ${decision.date}`}</h1>
                <div className="space-y-1">
                    <div className="flex">
                        <p className="font-medium min-w-[15ch] text-[#2C3E54]">
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
                    <div className="flex">
                        <p className="font-medium min-w-[15ch] text-[#2C3E54]">الغرفة:</p>
                        <p className="text-[#316E83] font-semibold">{decision.chamber}</p>
                    </div>
                    <div className="flex">
                        <p className="font-medium min-w-[15ch] text-[#2C3E54]">القسم:</p>
                        <p className="text-[#316E83] font-semibold">{decision.section}</p>
                    </div>
                    <div className="flex">
                        <p className="font-medium min-w-[15ch] text-[#2C3E54]">
                            التكييف:
                        </p>
                        <p className="text-[#316E83] font-semibold">{decision.procedure}</p>
                    </div>
                </div>
                <div className="space-y-6">
                    {decision.principle && (
                        <div>
                            <p className="font-semibold text-lg text-[#316E83] ">الموضوع:</p>
                            <p className="text-[#2C3E54] font-medium">{decision.subject}</p>
                        </div>
                    )}
                    <div>
                        <p className="font-semibold text-lg text-[#316E83] ">المبدأ:</p>
                        <p className="text-[#2C3E54] font-medium">
                            {decision.principle}
                        </p>
                    </div>
                </div>
            </div>
            {decision.pdf_link && (
                <div className="pr-4">
                    <iframe src={decision.pdf_link} className="w-full" style={{ minHeight: '80vh' }}></iframe>
                </div>
            )}
        </div>
    );
};

export default ConseilDecisionDetails;
