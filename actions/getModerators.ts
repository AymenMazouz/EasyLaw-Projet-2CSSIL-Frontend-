"use server";

import API_INFO from "@config/apiRoutes";
import buildGetUsersRequest from "@helpers/buildGetUsers";
import { User } from "@typings/User";
import { cookies } from "next/headers";

async function getModerators(): Promise<User[] | null> {
  const getUsersQuery: string = buildGetUsersRequest({
    active: undefined,
    role: "moderator",
    lastname: undefined,
    firstname: undefined,
    email: undefined,
  });

  const userToken = cookies().get("token")?.value;

  try {
    const response = await fetch(API_INFO.BASE_URL + getUsersQuery, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      next: {
        tags: ["getUsers"],
      },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getModerators;
