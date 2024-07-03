"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { arSA } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@components/ui/switch";
import { IoCalendar } from "react-icons/io5";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { useRouter } from "next/navigation";
import { buildSearchLink } from "@helpers/buildSupremeCourtSearch";
import { formatDateToYYYYMMDD } from "@helpers/formatDate";
import { DateRangePicker } from "@components/ui/date-range-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

const numbersRegEx = /^[0-9]*$/;

const FormSchema = z.object({
  search_query: z.string().optional(),
  haveDetailedSearch: z.boolean(),
  decision_number: z
    .string()
    .regex(numbersRegEx, "من فضلك أدخل رقما صالحا")
    .optional(),
  date_range: z
    .object({
      from: z.date().optional(),
      to: z.date().optional(),
    })
    .optional(),
  decision_subject: z.string().optional(),
  search_field: z.string().optional(),
});

export function SupremeCourtSearchForm({
  query,
  isBlured,
}: {
  query: { search_type: string | undefined };
  isBlured?: boolean;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search_query: "",
      haveDetailedSearch: false,
      decision_number: "",
      date_range: {
        from: undefined,
        to: undefined,
      },
      decision_subject: "",
      search_field: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(
      buildSearchLink(
        query.search_type,
        data.search_query?.length !== 0 ? data.search_query : undefined,
        data.decision_number?.length !== 0 ? data.decision_number : undefined,
        {
          from: data?.date_range?.from
            ? formatDateToYYYYMMDD(data.date_range.from)
            : undefined,
          to: data?.date_range?.to
            ? formatDateToYYYYMMDD(data.date_range.to)
            : undefined,
        },
        data.decision_subject?.length !== 0 ? data.decision_subject : undefined,
        data.search_field?.length !== 0 ? data.search_field : undefined
      ),
      {
        scroll: false,
      }
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`w-full ${
          isBlured ? "blur-sm pointer-events-none" : ""
        }  space-y-6`}
      >
        <div className="flex w-full md:items-center gap-6 items-start  flex-col md:flex-row">
          <FormField
            control={form.control}
            name="search_query"
            render={({ field }) => (
              <FormItem className="md:w-1/2 w-full">
                <FormControl>
                  <Input placeholder="كلمات مفتاحية ..." {...field} />
                </FormControl>
                <FormDescription>
                  ساعدنا في العثور على ما تبحث عنه
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="haveDetailedSearch"
            render={({ field }) => (
              <FormItem className="flex md:-translate-y-4  items-center gap-3 ">
                <FormControl>
                  <div className="flex items-center ">
                    <Switch
                      className={`shrink-0 translate-y-1 `}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormLabel className="">بحث متقدم</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {form.watch("haveDetailedSearch") && (
          <>
            <div className="flex w-full md:items-center gap-6 items-start  flex-col md:flex-row">
              <FormField
                control={form.control}
                name="decision_number"
                render={({ field }) => (
                  <FormItem className="md:w-1/3 w-full">
                    <FormLabel>رقم القرار</FormLabel>
                    <FormControl>
                      <Input placeholder="رقم القرار" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date_range"
                render={({ field }) => (
                  <FormItem className="md:w-1/3 mt-3 flex flex-col w-full">
                    <FormLabel>تاريخ القرار</FormLabel>
                    <FormControl>
                      <DateRangePicker
                        onUpdate={(values) => {
                          field.onChange(values.range);
                          setDate(values.range);
                        }}
                        initialDateFrom={""}
                        initialDateTo={""}
                        align="start"
                        showCompare={false}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full md:items-center gap-6 items-start  flex-col md:flex-row">
              <FormField
                control={form.control}
                name="decision_subject"
                render={({ field }) => (
                  <FormItem className="md:w-1/3 w-full">
                    <FormLabel>موضوع القرار</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger dir="rtl">
                          <SelectValue placeholder="موضوع القرار" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[
                          "محاولة",
                          "محجوزات",
                          "محرر رسمي",
                          "محضر المرافعات",
                          "محضر قضائي",
                          "محكمة الجنايات",
                          "محل تجاري",
                          "مخدرات",
                        ].map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="search_field"
                render={({ field }) => (
                  <FormItem className="md:w-1/3 w-full hidden">
                    <FormLabel>حقل البحث</FormLabel>
                    <FormControl>
                      <Input placeholder="حقل البحث" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}
        <Button type="submit">بحث</Button>
      </form>
    </Form>
  );
}

export default SupremeCourtSearchForm;
