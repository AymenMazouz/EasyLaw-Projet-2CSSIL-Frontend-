import LoginForm from "@components/auth/LoginForm";
import Footer from "@components/user/layout/Footer";
import ServerSideNavbar from "@components/user/layout/ServerSideNavbar";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <ServerSideNavbar />
      <main className="pt-24 items-center justify-center flex px-[5%] min-h-screen">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
