import { Button } from "@components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Plan } from "@typings/Plan";
import { Checkbox } from "@components/ui/checkbox";
import checkout from "@actions/checkout";

const UserPlansColumns = (
  type: string,
  purchasedPlan: number,
  isActive: boolean
): ColumnDef<Plan>[] => {
  const calculateSavingsPercentage = (
    monthlyPrice: number,
    yearlyPrice: number
  ) => {
    const totalMonthlyPrice = monthlyPrice * 12;
    const savings = totalMonthlyPrice - yearlyPrice;

    if (savings <= 0) {
      return 0;
    }

    const savingsPercentage = (savings / totalMonthlyPrice) * 100;
    return savingsPercentage.toFixed(2);
  };
  const columns: ColumnDef<Plan>[] = [
    {
      accessorKey: " العرض",
      header: " العرض",
      cell: ({ row }) => {
        const plan = row.original;
        return (
          <div className="bg-primary text-lg w-full text-white p-4  h-24  rounded-r-[10px] flex flex-col justify-center items-center">
            <p className="font-bold">{plan.name}</p>
            <p className="font-bold">
              {" "}
              {type === "month" ? plan.price_month : plan.price_year} دج{" "}
            </p>
            <p className="font-bold">
              {" "}
              {type === "year"
                ? "%" +
                  calculateSavingsPercentage(
                    plan.price_month,
                    plan.price_year
                  ) +
                  "-"
                : null}{" "}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "البحث في المحكمة العليا",
      header: "البحث في المحكمة العليا",
      cell: ({ row }) => {
        const plan = row.original;
        return <Checkbox checked={plan.has_search_supreme_court} />;
      },
    },
    {
      accessorKey: "البحث في القوانين",
      header: "البحث في القوانين",
      cell: ({ row }) => {
        const plan = row.original;
        return <Checkbox checked={plan.has_search_laws} />;
      },
    },
    {
      accessorKey: "البحث في الدستور",
      header: "البحث في الدستور",
      cell: ({ row }) => {
        const plan = row.original;
        return <Checkbox checked={plan.has_search_constitution} />;
      },
    },
    {
      accessorKey: "البحث في المجلس القضائي",
      header: "البحث في المجلس القضائي",
      cell: ({ row }) => {
        const plan = row.original;
        return <Checkbox checked={plan.has_search_conseil} />;
      },
    },
    {
      accessorKey: "الإشعارات",
      header: "الإشعارات",
      cell: ({ row }) => {
        const plan = row.original;
        return <Checkbox checked={plan.has_notifications_access} />;
      },
    },
    {
      accessorKey: "مساعد جي بي تي",
      header: "مساعد جي بي تي",
      cell: ({ row }) => {
        const plan = row.original;
        return <Checkbox checked={plan.has_gpt_access} />;
      },
    },
    {
      accessorKey: "   شراء",
      header: "   شراء",
      cell: ({ row }) => {
        const plan = row.original;
        const duration = type === "month" ? "monthly" : "yearly";
        const planSub = {
          plan_id: plan.id,
          plan_duration: duration,
          success_url: "http://localhost:3000/offers",
          failure_url: "http://localhost:3000/offers",
        };
        return (
          <Button
            className="w-full h-24 rounded-l-[10px] rounded-r-none"
            disabled={plan.id === purchasedPlan && isActive}
            onClick={async () => {
              const url = (await checkout(planSub)) as string;
              window.open(url);
            }}
          >
            شراء
          </Button>
        );
      },
    },
  ];

  return columns;
};

export default UserPlansColumns;
