"use server";

import { buildSearchQuery } from "@helpers/buildSupremeCourtSearch";
import { cookies } from "next/headers";

async function getSupremeCourtSearchResults(
  search_query: string | undefined,
  decision_number: string | undefined,
  date_range: { from: string | undefined; to: string | undefined },
  decision_subject: string | undefined,
  search_field: string | undefined,
  page: number
) {
  const query = buildSearchQuery(
    search_query,
    decision_number,
    date_range,
    decision_subject,
    search_field,
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
        tags: ["supreme-court-search"],
      },
    });
    const returnData = await res.json();
    return returnData;
  } catch (error) {
    console.error(error);
  }

  return [];
}

export default getSupremeCourtSearchResults;
