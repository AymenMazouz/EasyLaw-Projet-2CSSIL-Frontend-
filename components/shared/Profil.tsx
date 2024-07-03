"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { refreshDataCookies } from "@services/authentication.service";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { MdDone } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@typings/User";
import { z } from "zod";
import { Switch } from "@components/ui/switch";
import modifyUser from "@actions/modifyUser";

const passRegEx =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const FormSchema = z
  .object({
    firstname: z.string().min(2, {
      message: "الرجاء إدخال الاسم الأول صالح.",
    }),
    lastname: z.string().min(2, {
      message: "الرجاء إدخال اسم العائلة صالح.",
    }),
    email: z
      .string()
      .email({
        message: "الرجاء إدخال عنوان بريد إلكتروني صالح.",
      })
      .min(2, {
        message: "الرجاء إدخال عنوان بريد إلكتروني صالح.",
      }),
    wantChangePassword: z.boolean(),
    password: z.string().optional(),
  })
  .refine(
    (form) => {
      if (!form.wantChangePassword) return true;
      if (form.password && passRegEx.test(form.password)) {
        return true;
      }
    },
    {
      message:
        "الرجاء إدخال كلمة مرور صالحة. يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل وتحتوي على حرف كبير وحرف صغير ورقم ورمز خاص",
      path: ["password"],
    }
  );

export default function ModifyProfilForm({ user }: { user: User }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
      wantChangePassword: false,
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    const result = await modifyUser(
      {
        email: values.email,
        firstname: values.firstname,
        password: values.wantChangePassword ? values.password : undefined,
        lastname: values.lastname,
      },
      user?.id.toString()
    );
    if (result.status !== "success") {
      const resultError = result;
      toast.error("حدث خطأ غير متوقع", {
        description: resultError.message,
        position: "bottom-left",
        dismissible: true,
        cancelButtonStyle: {
          backgroundColor: "red",
          color: "white",
        },
        cancel: {
          label: "إلغاء",
          onClick: () => {
            toast.dismiss();
          },
        },
        icon: <GiCancel className="text-lg text-red-500" />,
      });
    }
    if (result.status === "success") {
      await refreshDataCookies();
      toast.success("  تم تعديل الملف الشخصي بنجاح", {
        description: result.message,
        position: "bottom-left",
        dismissible: true,
        cancelButtonStyle: {
          backgroundColor: "green",
          color: "white",
        },
        cancel: {
          label: "تحديث الصفحة",
          onClick: () => {
            window.location.reload();
          },
        },
        icon: <MdDone className="text-lg text-green-500" />,
      });
    }
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 bg-slate-100 px-8 py-12 rounded-lg shadow-md w-full"
      >
        <div className="flex flex-col gap-6 w-full lg:flex-row">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>الاسم الأول</FormLabel>
                <FormControl>
                  <Input placeholder="الاسم الأول" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>اسم العائلة</FormLabel>
                <FormControl>
                  <Input placeholder="اسم العائلة" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>البريد الإلكتروني</FormLabel>
                <FormControl>
                  <Input placeholder="البريد الإلكتروني" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6 py-6">
          <FormField
            control={form.control}
            name="wantChangePassword"
            render={({ field }) => (
              <FormItem className="flex md:translate-y-3 w-full  items-center gap-3 ">
                <FormControl>
                  <div className="flex items-center ">
                    <Switch
                      className={`shrink-0 translate-y-1 `}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormLabel className="">تغيير كلمة المرور</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch("wantChangePassword") && (
            <>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>كلمة المرور الجديدة</FormLabel>
                    <FormControl>
                      <Input placeholder="تغيير كلمة المرور" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <div className="w-full"></div>
        </div>

        <div className="flex lg:px-2 pt-6 justify-end">
          <Button disabled={isLoading} type="submit">
            {isLoading ? " جاري حفظ التغييرات ..." : " حفظ التغييرات"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
