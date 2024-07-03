"use client";

import modifyPlan from "@actions/modifyPlan";
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
import { Plan } from "@typings/Plan";
import { useRouter } from "next/navigation";

import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { RxCaretSort } from "react-icons/rx";

const activatePlan = async (plan: Plan) => {
  plan.active=true
  await modifyPlan(plan);
};

const deactivatePlan = async (plan: Plan) => {
  plan.active=false;
  await modifyPlan(plan);
};
const AdminPlansColumns = (): ColumnDef<Plan>[] => {
  const router=useRouter()

  const columns: ColumnDef<Plan>[] = [
    {
      accessorKey: "الحالة",
      header: "الحالة",
      cell: ({ row }) => {
        const plan = row.original;
        return (
          <div className="flex items-center justify-center ">
            <p
              className={`py-1 px-4 rounded-3xl ${
                plan.active ? "bg-green-400 " : "bg-red-400"
              }`}
            >
              {plan.active ? "مفعل" : "غير مفعل"}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "إسم العرض",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            إسم العرض
            <RxCaretSort className="mr-2" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const user = row.original;

        return <div className="lowercase">{user.name}</div>;
      },
    },
    {
      accessorKey: "الثمن بالشهر",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            الثمن بالشهر
            <RxCaretSort className="mr-2" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const user = row.original;

        return <div className="lowercase">{user.price_month}</div>;
      },
    },
    {
      accessorKey: "الثمن بالسنة",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            الثمن بالسنة
            <RxCaretSort className="mr-2" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const user = row.original;

        return <div className="lowercase">{user.price_year}</div>;
      },
    },
    {
      accessorKey: " تعريف العرض",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            تعريف العرض
            <RxCaretSort className="mr-2" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const user = row.original;

        return <div className="lowercase">{user.description}</div>;
      },
    },
    {
      accessorKey: "تفاصيل العرض",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            تفاصيل العرض
            <RxCaretSort className="mr-2" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const user = row.original;
        const details: string[] = [];

        if (user.has_search_supreme_court) details.push("البحث في المحكمة العليا");
        if (user.has_search_laws) details.push("البحث في القوانين");
        if (user.has_search_constitution) details.push("البحث في الدستور");
        if (user.has_search_conseil) details.push("البحث في المجلس القضائي");
        if (user.has_notifications_access) details.push("الإشعارات");
        if (user.has_gpt_access) details.push("مساعد جي بي تي");

        return <div className="lowercase flex flex-col  items-start">{details.map((detail, index) => (
          <div key={index}>{detail}</div>
        ))}</div>;
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
              <DropdownMenuSeparator />
              {user.active ? (
                <DropdownMenuItem
                  onClick={() => deactivatePlan(user)}
                  className="flex justify-end"
                >
                  <p className="text-center ">إلغاء التفعيل</p>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  onClick={() => activatePlan(user)}
                  className="flex justify-end"
                >
                  <p className="text-center ">تفعيل</p>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                  onClick={() =>{
                    const queryParams = new URLSearchParams({ plan: JSON.stringify(user) }).toString();
                    router.push(`/admin/tarification/tarificationEdit?${queryParams}`);
                  } }
                  className="flex justify-end"
                >
                  <p className="text-center ">تعديل </p>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return columns;
};

export default AdminPlansColumns;
