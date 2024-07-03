"use server";

import API_INFO from "@config/apiRoutes";
import { Plan } from "@typings/Plan";
import { cookies } from "next/headers";

async function getPlans(): Promise<Plan[] | null> {
  const userToken = cookies().get("token")?.value;

  try {
    const response = await fetch(`${API_INFO.BASE_URL}/plans`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      next: {
        tags: ["getPlans"],
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getPlans;
