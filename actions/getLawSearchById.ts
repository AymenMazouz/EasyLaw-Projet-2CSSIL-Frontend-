"use server";

import { buildLawSearchById } from "@helpers/buildLawSearchById";
import { cookies } from "next/headers";

async function getLawSearchById(id: number) {
  const query = buildLawSearchById(id);
  try {
    const res = await fetch(query, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("token")?.value}`,
      },
      next: {
        tags: ["laws"],
      },
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }

  return [];
}

export default getLawSearchById;
