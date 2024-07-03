"use server";

import API_INFO from "@config/apiRoutes";
import { Subscription } from "@typings/subs";
import { cookies } from "next/headers";

async function getSubs(): Promise<Subscription | null> {
  const userToken = cookies().get("token")?.value;
  try {
    const response = await fetch(`${API_INFO.BASE_URL}/subscriptions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (response.status !== 200) {
      return null;
    }

    const data: Subscription = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getSubs;
