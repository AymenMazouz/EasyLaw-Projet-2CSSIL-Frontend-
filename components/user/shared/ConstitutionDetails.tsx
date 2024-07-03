
import ConstitutionDecision from "@typings/ConstitutionDecision";
import React from "react";

const ConstitutionDetails = ({ decision }: { decision: ConstitutionDecision }) => {
    return (
        <div className="space-y-8 rounded-md bg-slate-100 lg:w-[70%] py-8 px-3 md:px-[2%]">
            <p className="text-primary text-center font-bold text-xl">
                الجمهورية الجزائرية الديمقراطية الشعبية
            </p>
            <div className="space-y-1">
                <div className="flex  ">
                    <p className="font-medium  min-w-[15ch] text-[#2C3E54]">
                        رقم الباب:
                    </p>
                    <p className="text-[#316E83] font-semibold">{decision.section_number}</p>
                </div>
                <div className="flex">
                    <p className="font-medium min-w-[15ch] text-[#2C3E54]">
                        اسم الباب:
                    </p>
                    <p className="text-[#316E83] font-semibold">{decision.section_name}</p>
                </div>
                <div className="flex  ">
                    <p className="font-medium  min-w-[15ch] text-[#2C3E54]">
                        رقم الفصل:
                    </p>
                    <p className="text-[#316E83] font-semibold">{decision.chapter_number}</p>
                </div>
                <div className="flex  ">
                    <p className="font-medium  min-w-[15ch] text-[#2C3E54]">
                        رقم الفصل:
                    </p>
                    <p className="text-[#316E83] font-semibold">{decision.chapter_name}</p>
                </div>

                <div className="flex ">
                    <p className="font-medium min-w-[15ch] text-[#2C3E54]">رقم المادة:</p>
                    <p className="text-[#316E83] font-semibold">{decision.article_number}</p>
                </div>
            </div>
            <div className="space-y-6">
                {decision.article_text && (
                    <div>
                        <p className="font-semibold text-lg text-[#316E83] ">نص المادة:</p>
                        <p className="text-[#2C3E54] font-medium">{decision.article_text}</p>
                    </div>
                )}
            </div>
        </div>
    );
};


export default ConstitutionDetails;



