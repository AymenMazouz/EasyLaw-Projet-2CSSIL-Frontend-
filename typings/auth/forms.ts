import { error } from "console";
import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email().min(2, {
    message: "الرجاء إدخال عنوان بريد إلكتروني صالح.",
  }),
  password: z.string().min(1, {
    message: "الرجاء إدخال كلمة مرور صالحة.",
  }),
});

const registerFormSchema = z
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
    password: z
      .string()
      .refine(
        (val) =>
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
            val
          ),
        {
          message:
            "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على حرف كبير واحد وحرف صغير واحد ورمز خاص واحد على الأقل.",
        }
      ),
    confirmPassword: z.string(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "كلمات المرور غير متطابقة",
      });
    }
  });

export type registerRequest = z.infer<typeof registerFormSchema>;

export type loginRequest = z.infer<typeof loginFormSchema>;

export { loginFormSchema, registerFormSchema };
