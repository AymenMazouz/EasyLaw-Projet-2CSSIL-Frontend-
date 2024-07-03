import Footer from "@components/user/layout/Footer";
import ServerSideNavbar from "@components/user/layout/ServerSideNavbar";
import AboutUs from "@components/user/shared/AboutUs";
import ClientOpinions from "@components/user/shared/ClientOpinions";
import FirstPage from "@components/user/shared/FirstPage";
import OurServices from "@components/user/shared/OurServices";

export default function Home() {
  return (
    <>
      <ServerSideNavbar />
      <main className="pt-24 px-[5%] min-h-screen">
        <FirstPage />
        <OurServices />
        <AboutUs />
        <ClientOpinions />
      </main>
      <Footer />
    </>
  );
}
