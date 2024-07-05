import { z } from "zod";
import { TodoPriority } from "@/types/ToDo";

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

export const TodoSchema = z.object({
  todo: z.string().min(1, { message: "Todo body cannot be null" }),
  priority: z.nativeEnum(TodoPriority, {
    invalid_type_error: "priority must be of type `TodoPriority`",
    required_error:
      "priority value must be set to either of [High, Medium, Low]",
  }),
});
