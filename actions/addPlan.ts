"use server";

import { cookies } from "next/headers";
import API_INFO from "@config/apiRoutes";
import { revalidateTag } from "next/cache";
import { AddPlanRequest } from "@typings/addPlan";

async function addPlan(
  plan:AddPlanRequest
) {
  const planData = JSON.stringify(plan);

  try {
    const response = await fetch(
      `${API_INFO.BASE_URL}/plans`,
      {
        method: "POST",
        body: planData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get("token")?.value}`,
        },
      }
    );
    if (response.status !== 201) {
      return {
        status: "error",
        message: "حدث خطأ غير متوقع",
      };
    }
    revalidateTag("getPlans");
    return {
      status: "success",
      message: "تمت اضافة العرض بنجاح",
    };
  } catch (error: any) {
    return {
      status: "server error",
      message: error.message || "حدث خطأ غير متوقع في الخادم",
    };
  }
}

export default addPlan;
