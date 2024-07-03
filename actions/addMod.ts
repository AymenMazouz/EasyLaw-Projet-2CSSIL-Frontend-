"use server";

import { cookies } from "next/headers";
import API_INFO from "@config/apiRoutes";
import { revalidateTag } from "next/cache";

async function addMod(
  newUser: {
    email?: string;
    firstname?: string;
    lastname?: string;
    password?: string;
    role?:string
  }) {
  const userNewData = JSON.stringify(newUser);

  try {
    const response = await fetch(
      `${API_INFO.BASE_URL}users`,
      {
        method: "POST",
        body: userNewData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get("token")?.value}`,
        },
      }
    );
    if (response.status !== 201) {
      return {
        status: "error",
        message: "حدث خطأ غير متوقع",
      };
    }
    //revalidateTag("getUsers");
    return {
      status: "success",
      message: "تمت اضافة المسير بنجاح",
    };
  } catch (error: any) {
    return {
      status: "server error",
      message: error.message || "حدث خطأ غير متوقع في الخادم",
    };
  }
}

export default addMod;
