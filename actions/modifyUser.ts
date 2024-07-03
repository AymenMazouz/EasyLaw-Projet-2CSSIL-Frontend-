"use server";

import { cookies } from "next/headers";
import API_INFO from "@config/apiRoutes";
import { revalidateTag } from "next/cache";

async function modifyUser(
  newUser: {
    email?: string;
    firstname?: string;
    lastname?: string;
    active?: boolean;
    password?: string;
  },
  userId: string
) {
  const userNewData = JSON.stringify(newUser);

  try {
    const response = await fetch(
      `${API_INFO.BASE_URL}${API_INFO.USERS.GET_USER_BY_ID(userId)}`,
      {
        method: "PUT",
        body: userNewData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get("token")?.value}`,
        },
      }
    );
    if (response.status !== 200) {
      return {
        status: "error",
        message: "حدث خطأ غير متوقع",
      };
    }
    revalidateTag("getUsers");
    return {
      status: "success",
      message: "تم تعديل المستخدم بنجاح",
    };
  } catch (error: any) {
    return {
      status: "server error",
      message: error.message || "حدث خطأ غير متوقع في الخادم",
    };
  }
}

export default modifyUser;
