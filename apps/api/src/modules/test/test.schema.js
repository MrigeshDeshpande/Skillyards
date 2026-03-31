import { z } from "zod";
export const registerTestSchema = z.object({
  name: z
    .string()
    .min(2, 'Name is required')
    .max(50, 'Name must be less than 50 characters')
    .trim(),

  email: z
    .string()
    .email('Invalid email address')
    .toLowerCase()
    .trim(),

  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, '')) 
    .refine((val) => val.length === 10, {
      message: 'Invalid phone number',
    }),
});