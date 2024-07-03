"use server";

import API_INFO from "@config/apiRoutes";
import { Plan } from "@typings/Plan";
import { cookies } from "next/headers";

async function getInvoice(): Promise<Plan[] | null> {
  const userToken = cookies().get("token")?.value;

  try {
    const response = await fetch(`${API_INFO.BASE_URL}/subscriptions/invoice`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getInvoice;
