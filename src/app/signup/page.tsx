"use client";

import { RegisterFormSchema } from "@/schemas/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/FormError";
import { api } from "@/lib/api";

const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
      username: ""
    },
  });



  const Register = async (email: string, password: string, username: string) => {
    try {
      const response = await api.post("/signup", {
        email,
        password,
        username
      });

      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  };

  const handleRegister = async (data: z.infer<typeof RegisterFormSchema>) => {
    const validatedFields = RegisterFormSchema.safeParse(data);

    if (!validatedFields.success) {
      return { error: "Invalid Fields" };
    }

    const { email, password, username } = validatedFields.data;

    const res = await Register(email, password, username);
    console.log(res);
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(handleRegister)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="p-4 border-2 "
          type="email"
          {...form.register("email")}
          required
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="p-4 border-2 "
          type="password"
          {...form.register("password")}
          required
          placeholder="password"
        />
        <label htmlFor="password">Username</label>
        <input
          id="username"
          className="p-4 border-2 "
          type="username"
          {...form.register("username")}
          required
          placeholder="username"
        />
        <button type="submit">Submit</button>
        {Object.keys(form.formState.errors).length > 0 && (
          <div className="text-red-500">
            {Object.values(form.formState.errors).map((error, index) => (
              <FormError key={index} message={error.message} />
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
