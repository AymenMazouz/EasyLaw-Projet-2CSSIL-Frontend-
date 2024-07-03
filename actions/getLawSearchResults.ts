"use server";

import { buildLawSearchQuery } from "@helpers/buildLawSearch";
import { cookies } from "next/headers";

async function getLawSearchResults(
  search_query: string | undefined,
  field: string | undefined,
  ministry: string | undefined,
  text_number: string | undefined,
  text_type: string | undefined,
  date_range: { from: string | undefined; to: string | undefined },
  signature_date_range: { from: string | undefined; to: string | undefined },
  page: number
) {
  const query = buildLawSearchQuery(
    search_query,
    field,
    ministry,
    text_number,
    text_type,
    date_range,
    signature_date_range,
    page
  );
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

export default getLawSearchResults;
