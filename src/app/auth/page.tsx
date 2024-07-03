"use client"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { motion } from "framer-motion";
import { z } from "zod"
import { useForm } from "react-hook-form"
import { LoginSchema, RegisterFormSchema } from "@/schemas/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "@/lib/api"
import FormError from "@/components/FormError"

export default function Authentication() {

    const registerForm = useForm<z.infer<typeof RegisterFormSchema>>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {
            email: "",
            username: "",
            password: ""
        },
    });

    const loginForm = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [isRegistered, setisRegistered] = useState<boolean>(false)


    const Register = async (email: string, username: string, password: string) => {
        try {
            const res = await api.post("/signup", {
                email,
                username,
                password,
            });
            return res
        } catch (error: any) {
            return error.response.data;
        }
    }

    const handleRegister = async (data: z.infer<typeof RegisterFormSchema>) => {
        console.log("in handle register");
        const validatedFields = RegisterFormSchema.safeParse(data)

        if (!validatedFields.success) {
            return { error: "Invalid Form Fields" }
        }
        const { email, username, password, } = validatedFields.data;
        const res = await Register(email, username, password)
        console.log(res);
    }


    const Login = async (email: string, password: string) => {
        try {
            const response = await api.post("/login",
                {
                    email,
                    password
                }
            )
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    }

    const handleLogin = async (data: z.infer<typeof LoginSchema>) => {
        console.log("in handle register");

        const validatedFields = LoginSchema.safeParse(data);
        if (!validatedFields.success) {
            return { error: "Invalid Form Fields" }
        }
        const { email, password } = validatedFields.data;
        const res = await Login(email, password)
        console.log(res)
    };

    return (
        <div className="w-full flex lg:h-full xl:min-h-[800px]">
            <div className="fixed inset-0 -z-10 h-full w-full bg-white rotate-45">
                <motion.div
                    className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                    initial={{ y: 0 }} // Initial position
                    animate={{ y: "-100%" }} // Animation to move upwards infinitely
                    transition={{ duration: 120, repeat: Infinity, repeatType: "loop" }}
                ></motion.div>
                <motion.div
                    className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                    initial={{ y: 0 }} // Initial position
                    animate={{ y: "-100%" }} // Animation to move upwards infinitely
                    transition={{ duration: 120, repeat: Infinity, repeatType: "loop" }}
                ></motion.div>
            </div>
            <div className="flex w-full  lg:w-3/5 items-center justify-center py-12">
                <form
                    className="mx-auto grid w-[450px] gap-6 p-4"
                    onSubmit={isRegistered ? loginForm.handleSubmit(handleLogin) : registerForm.handleSubmit(handleRegister)}>
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-3xl font-bold">
                            {isRegistered ? "Login" : "Register"}
                        </h1>
                        <p className="text-balance text-muted-foreground">
                            {isRegistered
                                ? "Good to have you back!"
                                : "Welcome to the StudyBean"}
                        </p>
                    </div>
                    {isRegistered ? (
                        <div className="flex flex-col gap-4">
                            <div className="gap-2">
                                <Label htmlFor="email" className="mb-1">
                                    Username
                                </Label>
                                <Input
                                    className="bg-white"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    {...loginForm.register("email")}
                                    required
                                />
                            </div>
                            <div className="felx flex-col gap-2">
                                <div className="flex items-center mb-1">
                                    <Label htmlFor="password">Password</Label>

                                </div>

                                <Input
                                    className="bg-white"
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    {...loginForm.register("password")}
                                    required
                                />
                            </div>
                            {Object.keys(loginForm.formState.errors).length > 0 && (
                                <div className="text-red-500">
                                    {Object.values(loginForm.formState.errors).map((error, index) => (
                                        <FormError key={index} message={error.message} />
                                    ))}
                                </div>
                            )}
                            <Button
                                type="submit"
                                className="w-1/3 mx-auto mt-2"
                            >
                                Login
                            </Button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <div className="gap-2">
                                <Label htmlFor="email" className="mb-1">
                                    Email
                                </Label>
                                <Input
                                    className="bg-white"
                                    id="email"
                                    type="email"
                                    placeholder="username@example.com"
                                    {...registerForm.register("email")}
                                    required
                                />
                            </div>
                            <div className="gap-2">
                                <Label htmlFor="email" className="mb-1">
                                    Username
                                </Label>
                                <Input
                                    className="bg-white"
                                    id="username"
                                    type="text"
                                    placeholder="Enter your username"
                                    {...registerForm.register("username")}
                                    required
                                />
                            </div>
                            <div className="felx flex-col gap-2">
                                <div className="flex items-center mb-1">
                                    <Label htmlFor="password">Password</Label>

                                </div>

                                <Input
                                    className="bg-white"
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    {...registerForm.register("password")}
                                    required
                                />
                            </div>
                            {Object.keys(registerForm.formState.errors).length > 0 && (
                                <div className="text-red-500">
                                    {Object.values(registerForm.formState.errors).map((error, index) => (
                                        <FormError key={index} message={error.message} />
                                    ))}
                                </div>
                            )}
                            <Link
                                href="/forgot-password"
                                className="m-auto inline-block text-sm underline"
                            >
                                Forgot your password?
                            </Link>
                            <Button
                                type="submit"
                                className="w-1/3 mx-auto mt-2"
                            >
                                Register
                            </Button>
                        </div>
                    )}
                    <div className="mt-4 text-center text-sm">
                        {isRegistered ? "Don't have an account? " : "Already a user? "}
                        {isRegistered ? (
                            <span
                                className={"underline-offset-2 underline cursor-pointer"}
                                onClick={() => {
                                    setisRegistered(false);
                                }}
                            >
                                Sign up
                            </span>
                        ) : (
                            <span
                                className={"underline-offset-2 underline cursor-pointer"}
                                onClick={() => {
                                    setisRegistered(true);
                                }}
                            >
                                Login
                            </span>
                        )}
                    </div>
                </form>

            </div>
            <div className="hidden bg-muted lg:block w-2/5">
                <Image
                    src="/authImg-02.svg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    );
}
