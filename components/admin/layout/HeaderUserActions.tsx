import React from "react";
import Header from "./header";
import { getUserDataFromCookies } from "@services/authentication.service";

const HeaderUserActions = async () => {
  const userDataCookies = await getUserDataFromCookies();
  if (!userDataCookies) return null;
  const user = userDataCookies?.user;

  return <Header user={user} />;
};

export default HeaderUserActions;
