import { z } from "zod";

const addPlanFormSchema = z.object({
  name: z.string().min(1, {
    message: "الرجاء إدخال اسم العرض.",
  }),
  description: z.string().min(1, {
    message: "الرجاء إدخال وصف العرض.",
  }),
  price_month: z.string().min(2, {
    message: "الرجاء إدخال ثمن صالح للشهر.",
  }),
  price_year: z.string().min(2, {
    message: "الرجاء إدخال ثمن صالح للسنة.",
  }),
  active: z.boolean().default(true),
  has_search_supreme_court: z.boolean().optional(),
  has_search_laws: z.boolean().optional(),
  has_search_constitution: z.boolean().optional(),
  has_search_conseil: z.boolean().optional(),
  has_notifications_access: z.boolean().optional(),
  has_gpt_access: z.boolean().optional(),
}).refine((data) => {
  const optionalFields = [
    data.has_search_supreme_court,
    data.has_search_laws,
    data.has_search_constitution,
    data.has_search_conseil,
    data.has_notifications_access,
    data.has_gpt_access,
  ];

  return optionalFields.some(field => field === true);
}, {
  message: "الرجاء اختيار واحدة على الأقل من الخيارات الاختيارية.",
  path: ["optionalFields"] 
});

export type AddPlanRequest = z.infer<typeof addPlanFormSchema>;
export { addPlanFormSchema };
