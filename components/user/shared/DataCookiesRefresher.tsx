"use client";

import { refreshDataCookies } from "@services/authentication.service";
import { useEffect } from "react";

const DataCookiesRefresher = () => {
  useEffect(() => {
    refreshDataCookies();
  }, []);
  return (
    <div className="bg-green-200 w-[60%] rounded-md py-1 text-green-600 text-center">
      تمت عملية الدفع بنجاح
    </div>
  );
};

export default DataCookiesRefresher;
