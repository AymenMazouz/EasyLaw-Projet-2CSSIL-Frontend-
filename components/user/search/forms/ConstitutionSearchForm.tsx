"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { arSA } from "date-fns/locale";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { buildSearchConstitutionLink } from "@helpers/buildSearchConstitutionLink";
import { formatDateToYYYYMMDD } from "@helpers/formatDate";
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
  section_number: z
    .string()
    .regex(numbersRegEx, "من فضلك أدخل رقما صالحا")
    .optional(),
  section_name: z.string().optional(),
  chapter_number: z
    .string()
    .regex(numbersRegEx, "من فضلك أدخل رقما صالحا")
    .optional(),
  chapter_name: z.string().optional(),
  article_number: z
    .string()
    .regex(numbersRegEx, "من فضلك أدخل رقما صالحا")
    .optional(),
});

export function ConstitutionSearchForm({
  query,
  isBlured,
}: {
  query: { search_type: string | undefined };
  isBlured?: boolean;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search_query: "",
      haveDetailedSearch: false,
      section_number: "",
      section_name: "",
      chapter_number: "",
      chapter_name: "",
      article_number: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(
      buildSearchConstitutionLink(
        query.search_type,
        data.search_query?.length !== 0 ? data.search_query : undefined,
        data.section_number?.length !== 0 ? data.section_number : undefined,
        data.section_name?.length !== 0 ? data.section_name : undefined,
        data.chapter_number?.length !== 0 ? data.chapter_number : undefined,
        data.chapter_name?.length !== 0 ? data.chapter_name : undefined,
        data.article_number?.length !== 0 ? data.article_number : undefined
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
                name="section_number"
                render={({ field }) => (
                  <FormItem className="md:w-1/3 w-full">
                    <FormLabel>رقم الباب</FormLabel>
                    <FormControl>
                      <Input placeholder="رقم الباب" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="section_name"
                render={({ field }) => (
                  <FormItem className="md:w-1/3 w-full flex flex-col mt-3">
                    <FormLabel>اسم الباب</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger dir="rtl">
                          <SelectValue placeholder="اسم الباب" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[
                          "الديباجة",
                          "المبادئ العامة التي تحكم المجتمع الجزائري",
                          "الحقوق الأساسية والحريات العامة والواجبات",
                          " تنظيم السلطات والفصل بينها",
                          " مؤسسات الرقابة",
                          " الهيئات الاسـتـشـاريـة",
                          "التعديل الدستوري",
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
            </div>
            <div className="flex w-full md:items-center gap-6 items-start  flex-col md:flex-row">
              <FormField
                control={form.control}
                name="chapter_number"
                render={({ field }) => (
                  <FormItem className="md:w-1/3 w-full">
                    <FormLabel>رقم الفصل</FormLabel>
                    <FormControl>
                      <Input placeholder="رقم الفصل" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="chapter_name"
                render={({ field }) => (
                  <FormItem className="md:w-1/3 w-full">
                    <FormLabel>اسم الفصل</FormLabel>
                    <FormControl>
                      <Input placeholder="اسم الفصل" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full md:items-center gap-6 items-start  flex-col md:flex-row">
              <FormField
                control={form.control}
                name="article_number"
                render={({ field }) => (
                  <FormItem className="md:w-1/3 w-full">
                    <FormLabel>رقم المادة</FormLabel>
                    <FormControl>
                      <Input placeholder="رقم المادة" {...field} />
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

export default ConstitutionSearchForm;
