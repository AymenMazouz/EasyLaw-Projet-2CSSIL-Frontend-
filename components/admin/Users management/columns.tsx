"use client";

import modifyUser from "@actions/modifyUser";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@typings/User";

import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { RxCaretSort } from "react-icons/rx";

const activateUser = async (userId: string) => {
  await modifyUser({ active: true }, userId);
};

const deactivateUser = async (userId: string) => {
  await modifyUser({ active: false }, userId);
};

const AdminUsersColumns = (): ColumnDef<User>[] => {
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "الحالة",
      header: "الحالة",
      cell: ({ row }) => {
        const user = row.original;
        return (
          <div className="flex items-center justify-center ">
            <p
              className={`py-1 px-4 rounded-3xl ${
                user.active ? "bg-green-400 " : "bg-red-400"
              }`}
            >
              {user.active ? "مفعل" : "غير مفعل"}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "البريد الإلكتروني",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            البريد الإلكتروني
            <RxCaretSort className="mr-2" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const user = row.original;

        return <div className="lowercase">{user.email}</div>;
      },
    },

    {
      id: "actions",
      header: "إجراءات",
      enableHiding: false,
      cell: ({ row }) => {
        const user = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">فتح القائمة</span>
                <HiMiniEllipsisHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-right">
              <DropdownMenuLabel className="text-right">
                إجراءات
              </DropdownMenuLabel>
              <DropdownMenuItem
                className="text-right"
                onClick={() =>
                  navigator.clipboard.writeText(user.id.toString())
                }
              >
                نسخ معرف المستخدم
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {user.active ? (
                <DropdownMenuItem
                  onClick={() => deactivateUser(user.id.toString())}
                  className="flex justify-end"
                >
                  <p className="text-center ">إلغاء التفعيل</p>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  onClick={() => activateUser(user.id.toString())}
                  className="flex justify-end"
                >
                  <p className="text-center ">تفعيل</p>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return columns;
};

export default AdminUsersColumns;
