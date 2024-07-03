import LawDecision from "@typings/LawDecision";
import React from "react";

const LawDecisionDetails = ({ decision }: { decision: LawDecision }) => {
    return (
        <div className="flex flex-col space-y-8 rounded-md bg-slate-100 lg:w-[70%] py-8 px-3 md:px-[2%]">
            <div className="space-y-8">
                <p className="text-primary text-center font-bold text-xl">
                    الجمهورية الجزائرية الديمقراطية الشعبية
                </p>
                <h1 className="text-primary font-bold text-2xl">{`${decision.text_type} رقم ${decision.text_number} الصادر بتاريخ ${decision.journal_date}`}</h1>
            </div>
            <div className="flex flex-wrap justify-between space-x-4 space-y-4">
                <div className="flex items-center space-x-4">
                    <p className="font-medium text-[#2C3E54] min-w-[15ch]">نوع النص:</p>
                    <p className="text-[#316E83] font-semibold">{decision.text_type}</p>
                </div>
                <div className="flex items-center space-x-4">
                    <p className="font-medium text-[#2C3E54] min-w-[15ch]">رقم النص:</p>
                    <p className="text-[#316E83] font-semibold">{decision.text_number}</p>
                </div>
                <div className="flex items-center space-x-4">
                    <p className="font-medium text-[#2C3E54] min-w-[15ch]">تاريخ النشر:</p>
                    <p className="text-[#316E83] font-semibold">{decision.journal_date}</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <p className="font-medium text-[#2C3E54] min-w-[15ch]">رقم الجريدة:</p>
                    <p className="text-[#316E83] font-semibold">{decision.journal_num}</p>
                </div>
                <div className="flex items-center space-x-4">
                    <p className="font-medium text-[#2C3E54] min-w-[15ch]">المجال:</p>
                    <p className="text-[#316E83] font-semibold">{decision.field}</p>
                </div>
                <div className="flex items-center space-x-4">
                    <p className="font-medium text-[#2C3E54] min-w-[15ch]">تاريخ التوقيع:</p>
                    <p className="text-[#316E83] font-semibold">{decision.signature_date}</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <p className="font-medium text-[#2C3E54] min-w-[15ch]">الوزارة:</p>
                    <p className="text-[#316E83] font-semibold">{decision.ministry}</p>
                </div>
                <div className="flex items-center space-x-4">
                    <p className="font-medium text-[#2C3E54] min-w-[15ch]">المحتوى:</p>
                    <p className="text-[#316E83] font-semibold">{decision.content}</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <p className="font-medium text-[#2C3E54] min-w-[15ch]">عرض المحتوى الأصلي على الجريدة :</p>
                    <p className="text-[#316E83] font-semibold"><a className="text-[#316E83] font-semibold" href={decision.journal_link} target="_blank" rel="noopener noreferrer">رابط PDF</a></p>
                </div>
                  
                    
                <div className="flex items-center space-x-4 space-y-4">
                    <p className="font-medium text-[#2C3E54] min-w-[15ch]">المحتوى الطويل:</p>
                    <p className="text-[#316E83] font-semibold">{decision.long_content}</p>
                </div>
               

            
                    
                {/* Ajoutez d'autres champs ici en suivant le même modèle */}
            </div>
        </div>
    );
};

export default LawDecisionDetails;
