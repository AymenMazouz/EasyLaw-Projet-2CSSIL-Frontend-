"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { register } from "@services/authentication.service";
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
import { registerRequest } from "@typings/auth/forms";
import { registerFormSchema } from "@typings/auth/forms";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import IMAGES from "@config/images";

const formSchema = registerFormSchema;

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<registerRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: registerRequest) {
    setIsLoading(true);
    const result = await register(values);
    if (result.status !== "success") {
      const resultError = result;
      toast.error("خطأ في التسجيل", {
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
      toast.success("تم التسجيل بنجاح", {
        description: "الآن يمكنك تسجيل الدخول",
        position: "bottom-left",
        dismissible: true,
        cancelButtonStyle: {
          backgroundColor: "green",
          color: "white",
        },
        cancel: {
          label: "تسجيل",
          onClick: () => {
            router.push("/auth/login");
          },
        },
        icon: <MdDone className="text-lg text-green-500" />,
      });
      form.reset();
    }
    setIsLoading(false);
  }

  return (
    <div className="grid grid-cols-1 w-full lg:grid-cols-2">
      <div className="w-4/5">
      <img src={IMAGES.SIGN_UP} alt="login"  />

      </div>
      <Form {...form}>


      <div className="max-h-fit my-auto">
      <p className="font-bold mb-4">  مرحباً! يرجى ملء النموذج أدناه لإنشاء حساب جديد والانضمام إلينا</p>


        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 bg-slate-100 px-8 py-12 rounded-lg shadow-md w-full"
        >
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
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
              <FormItem>
                <FormLabel>البريد الإلكتروني</FormLabel>
                <FormControl>
                  <Input placeholder="البريد الإلكتروني" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>كلمة المرور</FormLabel>
                <FormControl>
                  <Input placeholder="كلمة المرور" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>تأكيد كلمة المرور</FormLabel>
                <FormControl>
                  <Input placeholder="تأكيد كلمة المرور" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex lg:px-2 pt-6 justify-end">
            <Button disabled={isLoading} type="submit">
              {isLoading ? "جار إنشاء الحساب..." : "إنشاء الحساب"}
            </Button>
          </div>
        </form>
        </div>
      </Form>
    </div>
  );
}
