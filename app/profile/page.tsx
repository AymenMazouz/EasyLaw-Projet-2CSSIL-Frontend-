import ModifyProfilForm from "@components/shared/Profil";
import Footer from "@components/user/layout/Footer";
import ServerSideNavbar from "@components/user/layout/ServerSideNavbar";
import { getUserDataFromCookies } from "@services/authentication.service";
import React from "react";

const ProfilPage = async () => {
  const userDataCookies = await getUserDataFromCookies();
  if (!userDataCookies) {
    return null;
  }
  const user = userDataCookies.user;
  return (
    <>
      <ServerSideNavbar />
      <main className="pt-24 items-center justify-center flex px-[5%] min-h-screen">
        <ModifyProfilForm user={user} />
      </main>
      <Footer />
    </>
  );
};

export default ProfilPage;
