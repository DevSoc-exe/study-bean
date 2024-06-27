import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please Enter a Valid Email",
  }),
  password: z
    .string({
      required_error: "This field cannot be empty.",
    })
    .min(1, {
      message: "Enter a valid password",
    }),
});

export const RegisterFormSchema = z.object({
  email: z.string().email({
    message: "Please Enter a Valid Email",
  }),
  password: z
    .string({
      required_error: "This field cannot be empty.",
    })
    .min(6)
    .max(20),
  username: z
    .string({
      required_error: "This field cannot be empty",
    })
    .min(5),
});
