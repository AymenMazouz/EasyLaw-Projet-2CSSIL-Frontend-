"use client"
import addMod from '@actions/addMod';
import { Button } from '@components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form';
import { Input } from '@components/ui/input';
import IMAGES from '@config/images';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { GiCancel } from 'react-icons/gi';
import { MdDone } from 'react-icons/md';
import { toast } from 'sonner';
import { z } from 'zod';

function page() {
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
      role:z.string({
        message: "الرجاء إدخال دور صالح.",
      }),
    password: z.string(),
  })
  .refine(
    (form) => {
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
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      role:"moderator",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    const result = await addMod(
      {
        email: values.email,
        firstname: values.firstname,
        password: values.password,
        lastname: values.lastname,
        role:values.role
      }
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
      toast.success("  تمت اضافة المسير  بنجاح", {
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
            router.push("/admin/moderators");;
          },
        },
        icon: <MdDone className="text-lg text-green-500" />,
      });
    }
    setIsLoading(false);
  }

  return (
    <div className='flex flex-col'>
    <div className="flex flex-col items-start gap-y-2">
      <h1 className="font-bold text-3xl">   إضافة مسير جديد</h1>
      <div className="w-full flex justify-between p-5 items-center">
      
        <h1 className="text-2xl">الرجاء ملئ الإستمارة التالية</h1>
        
      </div>
       
      </div>
    
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 bg-slate-100 px-8 py-12 rounded-lg shadow-md w-full"
      >
        <div className="flex flex-col gap-6 w-full">
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
           <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>كلمة المرور </FormLabel>
                    <FormControl>
                      <Input placeholder=" كلمة المرور" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
            
        </div>

        <div className="flex lg:px-2 pt-6 justify-end">
          <Button disabled={isLoading} type="submit">
            {isLoading ? " جاري حفظ التغييرات ..." : " حفظ التغييرات"}
          </Button>
        </div>
      </form>
    </Form>
    </div>
  )
}

export default page