"use client"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function Authentication() {

    const [isRegistered, setisRegistered] = useState<boolean>(false)
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleRegister = () => {

    }

    const handleLogin = () => {

    }
    return (
        <div className="w-full flex lg:h-full xl:min-h-[800px">
            <div className="flex w-3/5  items-center justify-center py-12">
                <form className="mx-auto grid w-[450px] gap-6 p-4" onSubmit={(e) => { e.preventDefault() }}>
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-3xl font-bold">
                            {isRegistered ? "Login" : "Register"}
                        </h1>
                        <p className="text-balance text-muted-foreground">
                            {isRegistered ? "Good to have you back!" : "Welcome to the StudyBean"}
                        </p>
                    </div>
                    {isRegistered ?
                        <div className="flex flex-col gap-4">
                            <div className="gap-2">
                                <Label htmlFor="email" className="mb-1" >Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="felx flex-col gap-2">
                                <div className="flex items-center mb-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>

                                <Input id="password" type="password" placeholder="Enter your password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                        </div>
                        :
                        <div className="flex flex-col gap-4">
                            <div className="gap-2">
                                <Label htmlFor="email" className="mb-1" >Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="username@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="gap-2">
                                <Label htmlFor="email" className="mb-1" >Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="felx flex-col gap-2">
                                <div className="flex items-center mb-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>

                                <Input id="password" type="password" placeholder="Enter your password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                        </div>}
                    {
                        isRegistered ? <Button type="submit" className="w-1/3 mx-auto mt-2" onClick={handleLogin}>
                            Login
                        </Button> : <Button type="submit" className="w-1/3 mx-auto mt-2" onClick={handleRegister}>
                            Register
                        </Button>
                    }
                    <div className="mt-4 text-center text-sm">
                        {isRegistered ? "Don't have an account? " : "Already a user? "}
                        {isRegistered ?
                            <span className={"underline-offset-2 underline cursor-pointer"} onClick={() => { setisRegistered(false) }}>Sign up</span>
                            :
                            <span className={"underline-offset-2 underline cursor-pointer"} onClick={() => { setisRegistered(true) }}>Login</span>
                        }
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
    )
}
