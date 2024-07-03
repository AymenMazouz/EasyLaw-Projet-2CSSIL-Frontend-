"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AddPlanRequest, addPlanFormSchema } from "@typings/addPlan";
import { GiCancel } from "react-icons/gi";
import { MdDone } from "react-icons/md";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { Checkbox } from "@components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import IMAGES from "@config/images";
import addPlan from "@actions/addPlan";
import { toast } from "sonner";
import { Plan } from "@typings/Plan";
import modifyPlan from "@actions/modifyPlan";

const formSchema = addPlanFormSchema;

export default function EditPlanForm(plan: Plan) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  console.log("plan");

  const form = useForm<AddPlanRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: plan.name,
      description: plan.description,
      price_month: plan.price_month.toString(),
      price_year: plan.price_year.toString(),
      active: plan.active,
      has_search_supreme_court: plan.has_search_supreme_court,
      has_search_laws: plan.has_search_laws,
      has_search_constitution: plan.has_search_constitution,
      has_search_conseil: plan.has_search_conseil,
      has_notifications_access: plan.has_notifications_access,
      has_gpt_access: plan.has_gpt_access,
    },
  });

  async function onSubmit(values: AddPlanRequest) {
    const parsedValues: any = {
      ...values,
      price_month: parseFloat(values.price_month),
      price_year: parseFloat(values.price_year),
    };
    setIsLoading(true);
    parsedValues.id = plan.id;
    await modifyPlan(parsedValues);

    setIsLoading(false);
  }

  const accesses = [
    {
      id: "has_search_supreme_court",
      label: "بحث في المحكمة العليا",
    },
    {
      id: "has_search_laws",
      label: "بحث في القوانين",
    },
    {
      id: "has_search_constitution",
      label: "بحث في الدستور",
    },
    {
      id: "has_search_conseil",
      label: "بحث في المجلس القضائي",
    },
    {
      id: "has_notifications_access",
      label: "الإشعارات",
    },
    {
      id: "has_gpt_access",
      label: "مساعد جي بي تي",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start gap-y-3">
        <h1 className="font-bold text-3xl"> تعديل العرض</h1>
        <div className="w-full flex justify-between p-5 items-center">
          <h1 className="text-2xl">الرجاء ملئ الإستمارة التالية</h1>
          <img src={IMAGES.PAYEMENT_ILLUSTRATION} className="w-96 h-96"></img>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 bg-slate-100 px-8 py-12 rounded-lg shadow-md w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>اسم العرض</FormLabel>
                <FormControl>
                  <Input placeholder="اسم العرض" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>وصف العرض</FormLabel>
                <FormControl>
                  <Input placeholder="وصف العرض" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price_month"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الثمن بالشهر</FormLabel>
                <FormControl>
                  <Input placeholder="الثمن بالشهر" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price_year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الثمن بالسنة</FormLabel>
                <FormControl>
                  <Input placeholder="الثمن بالسنة" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h1 className="font-bold">الرجاء اختيار مزايا العرض</h1>
          {accesses.map((access) => (
            <FormField
              key={access.id}
              control={form.control}
              name={
                access.id as
                  | "name"
                  | "description"
                  | "price_month"
                  | "price_year"
                  | "active"
                  | "has_search_supreme_court"
                  | "has_search_laws"
                  | "has_search_constitution"
                  | "has_search_conseil"
                  | "has_notifications_access"
                  | "has_gpt_access"
              }
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between w-full">
                    <div className="w-64">
                      <FormLabel>{access.label}</FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        className="mx-10"
                        checked={field.value as CheckedState | undefined}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          ))}

          <div className="flex lg:px-2 pt-6 justify-end">
            <Button type="submit">
              {isLoading ? "جار تعديل العرض..." : "تعديل العرض"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
