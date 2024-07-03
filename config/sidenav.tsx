import React from "react";
import { BiMoney, BiUser } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { RiAdminLine, RiMoneyCnyBoxFill } from "react-icons/ri";

const ADMIN_SIDENAV_ITEMS = [
  {
    title: "لوحة القيادة",
    path: "/admin/dashboard",
    icon: <MdDashboard size={25} />,
  },
  {
    title: "المستخدمين",
    path: "/admin/users",
    icon: <BiUser size={25} />,
  },
  {
    title: "المسيرين",
    path: "/admin/moderators",
    icon: <RiAdminLine size={25} />,
  },
  {
    title: "العروض",
    path: "/admin/tarification",
    icon: <BiMoney size={25} />,
  },
];

const MODERATOR_SIDENAV_ITEMS = [
  {
    title: "لوحة القيادة",
    path: "/moderator/dashboard",
    icon: <MdDashboard size={25} />,
  },
  {
    title: "حسابي",
    path: "/moderator/myProfile",
    icon: <BiUser size={25} />,
  },
];

export { ADMIN_SIDENAV_ITEMS, MODERATOR_SIDENAV_ITEMS };
