import React from "react";
import Navbar from "./Navbar";
import { getUserDataFromCookies } from "@services/authentication.service";
import { UserDataCookies } from "@typings/User";

const ServerSideNavbar = async () => {
  const userDataCookies: UserDataCookies | null =
    await getUserDataFromCookies();
  return (
    <div>
      <Navbar userDataCookies={userDataCookies} />
    </div>
  );
};

export default ServerSideNavbar;
