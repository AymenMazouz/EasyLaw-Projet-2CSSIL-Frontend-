import RegisterForm from "@components/auth/RegisterForm";
import Footer from "@components/user/layout/Footer";
import ServerSideNavbar from "@components/user/layout/ServerSideNavbar";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <ServerSideNavbar />
      <main className="pt-24 items-center justify-center flex px-[5%] min-h-screen">
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;
