import ModifyProfilForm from "@components/shared/Profil";
import { getUserDataFromCookies, getUserDataFromCookiesMod } from "@services/authentication.service";
import React from "react";

const page = async () => {
  const userDataCookies = await getUserDataFromCookiesMod();
  if (!userDataCookies) {
    return null;
  }
  const user = userDataCookies.user;
  console.log(user);
  
  return (
    <main className="pt-24 items-center justify-center flex px-[5%] min-h-screen">
    <ModifyProfilForm user={user} />
  </main>
  );
};

export default page;
