import HeaderUserActions from "@components/admin/layout/HeaderUserActions";
import HeaderMobile from "@components/admin/layout/header-mobile";
import MarginWidthWrapper from "@components/admin/layout/margin-width-wrapper";
import PageWrapper from "@components/admin/layout/page-wrapper";
import SideNav from "@components/admin/layout/side-nav";
import { MODERATOR_SIDENAV_ITEMS } from "@config/sidenav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moderator Dashboard",
  description: "Moderator Dashboard",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideNav items={MODERATOR_SIDENAV_ITEMS} />
      <main className="flex-1">
        <MarginWidthWrapper>
          <HeaderUserActions />
          <HeaderMobile items={MODERATOR_SIDENAV_ITEMS} />
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
}
