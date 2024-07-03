import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@components/ui/accordion";
import { Button } from "@components/ui/button";
import { BsPrinterFill } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
import getInvoice from "@actions/getInvoice";

const InvoiceAccordion = (props: any) => {
  // const invoice = getInvoice();

  const features = [
    props.has_search_supreme_court && "البحث في المحكمة العليا",
    props.has_search_laws && "البحث في القوانين",
    props.has_search_constitution && "البحث في الدستور",
    props.has_search_conseil && "البحث في المجلس القضائي",
    props.has_notifications_access && "الإشعارات",
    props.has_gpt_access && "مساعد جي بي تي",
  ]
    .filter(Boolean)
    .join(" - ");

  return (
    <div className="w-2/3 border-2 border-primary rounded-[20px]">
      <div className=" p-3 h-16 flex items-center gap-3 ">
        <div className="flex justify-start items-start gap-x-3">
          <BiMoney className="w-7 h-7" />
          <div className="flex flex-col justify-between items-start">
            <span className="text-primary text-lg font-bold">
              {props.planeName}
            </span>
            <span className="text-[#6D6D6D] text-sm">{props.date}</span>
          </div>
        </div>
      </div>
      <div className="rounded-bl-[20px] rounded-br-[20px]   p-4 bg-white">
        <div className="mb-4 text-primary md:text-lg text-sm">
          <p>تاريخ الشراء: {props.purchaseDate}</p>
          <p>تاريخ نهاية الصلاحية: {props.endDate}</p>
          <p>الإسم الكامل: {props.username}</p>
          <p>المستقبل: {props.recipient}</p>
        </div>
        <div className="mb-4 text-primary text-lg">
          <p>المزايا: {features}</p>
        </div>
        <div className="w-full h-[2px] bg-primary"></div>
        <table className="mt-5 w-full text-right">
          <thead>
            <tr className="text-primary font-bold md:text-lg text-sm">
              <th>العرض</th>
              <th>الثمن شهريا</th>
              <th>الثمن سنويا</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[#316E83] md:text-lg text-sm mt-5">
              <td>{props.planeName}</td>
              <td>دج {props.priceM}</td>
              <td>دج {props.priceY}</td>
            </tr>
          </tbody>
        </table>
        <div className="w-full flex justify-end">
          <Button>طباعة</Button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceAccordion;
