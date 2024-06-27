"use client";

import { LoginSchema } from "@/schemas/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/components/FormError";
import { api } from "@/lib/api";
import { useState } from "react";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [LoggedIn, setLoggedIn] = useState<boolean>(false);
  const [validatedResponse, setValidatedResponse] = useState<string | undefined>();

  const Login = async (email: string, password: string) => {
    try {
      const response = await api.post("/login",
        {
          email,
          password
        }
      )

      if(response.data.success) {
        setLoggedIn(true)
      }

      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  const handleLogin = async (data: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(data);

    if (!validatedFields.success) {
      return { error: "Invalid Fields" };
    }

    const { email, password } = validatedFields.data;

    const res = await Login(email, password)
    console.log(res)
  };

  async function validate() {
    try {
      const response = await api.get("/validate")
      if(response.data.success) {
        setValidatedResponse("Validated")
      }
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  return (
    <div>
      <form onSubmit={form.handleSubmit(handleLogin)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="p-4 border-2 "
          type="email"
          {...form.register("email")}
          required
          placeholder="enter"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="p-4 border-2 "
          type="password"
          {...form.register("password")}
          required
          placeholder="enter"
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
      {LoggedIn &&
      <>
        <button onClick={validate}>Validate</button>
        {validatedResponse}
      </>
      }
    </div>
  );
};

export default LoginForm;
