"use server";

import { cookies } from "next/headers";
import API_INFO from "@config/apiRoutes";
import { revalidateTag } from "next/cache";

async function modifyPlan(
  newPlan: {
    id:number;
    name?: string;
    description?: string;
    price_month?: number;
    price_year?: number;
    active?: boolean;
    has_search_supreme_court?:boolean;
    has_search_laws?:boolean;
    has_search_constitution?:boolean;
    has_search_conseil?:boolean;
    has_notifications_access?:boolean;
    has_gpt_access?:boolean;
  }
) {
  const userNewData = JSON.stringify(newPlan);

  try {
    const response = await fetch(
      `${API_INFO.BASE_URL}/plans`,
      {
        method: "PUT",
        body: userNewData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get("token")?.value}`,
        },
      }
    );
    if (response.status !== 200) {
      return {
        status: "error",
        message: "حدث خطأ غير متوقع",
      };
    }
    revalidateTag("getPlans");
    return {
      status: "success",
      message: "تم تعديل المستخدم بنجاح",
    };
  } catch (error: any) {
    return {
      status: "server error",
      message: error.message || "حدث خطأ غير متوقع في الخادم",
    };
  }
}

export default modifyPlan;
