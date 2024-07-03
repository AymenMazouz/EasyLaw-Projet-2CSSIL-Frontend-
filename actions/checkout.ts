"use server";

import API_INFO from "@config/apiRoutes";
import { SubscriptionPlan } from "@typings/Plan";
import { cookies } from "next/headers";

async function checkout(subPlan: SubscriptionPlan): Promise<string | null> {
  const formData = JSON.stringify(subPlan);

  const userToken = cookies().get("token")?.value;

  try {
    const response = await fetch(
      `${API_INFO.BASE_URL}/subscriptions/checkout`,
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    const data = await response.json();
    return data.checkout_url;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default checkout;
