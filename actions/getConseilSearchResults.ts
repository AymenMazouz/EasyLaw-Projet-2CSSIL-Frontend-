"use server";

import { buildConseilSearchQuery } from "@helpers/buildConseilSearch";
import { cookies } from "next/headers";

async function getConseilSearchResults(
  search_query: string | undefined,
  number: string | undefined,
  date_range: { from: string | undefined; to: string | undefined },
  chamber: string | undefined,
  section: string | undefined,
  procedure: string | undefined,
  subject: string | undefined,
  page: number
) {
  const query = buildConseilSearchQuery(
    search_query,
    number,
    date_range,
    chamber,
    section,
    procedure,
    subject,
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
        tags: ["conseil-search"],
      },
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }

  return [];
}

export default getConseilSearchResults;
