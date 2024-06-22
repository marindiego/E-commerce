'use client';

// vendor
import React, { useState, useEffect } from "react";


// types
import { LoginErrorProps, LoginProps } from "@/types";

// helpers
import { validateLoginForm } from "@/helpers/formValidation";

// components
import { Button, Checkbox, Label } from "flowbite-react";
import Logo from "../Logo";
import { FaGoogle, FaApple } from "react-icons/fa";  // Importa los íconos de Google y Apple
import { login } from "@/helpers/auth.helper";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
    const router = useRouter();
    const {userData, setUserData} = useAuth();
    const [dataUser, setDataUser] = useState<LoginProps>({
        email: "",
        password: "",
    });
    const [errorUser, setErrorUser] = useState<LoginErrorProps>({
        email: "",
        password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({ ...dataUser, [event.target.name]: event.target.value });
    };

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validateLoginForm(dataUser);

        setErrorUser(errors);
        if (Object.keys(errors).length > 0) {
            return;
        }

        try {
            const response = await login(dataUser);
            const {token, user  } = response;

            setUserData({ token, userData: user });
            // localStorage.setItem("userSession", JSON.stringify({
            //     token,
            //     userData: user
            // }));
            localStorage.setItem("isLogged", "true");
            
            router.push("/");
        } catch (error: any) {
            alert(error.message)
        }

    };

    const handleGoogleSignIn = () => {
        console.log("Sign in with Google");
    };

    const handleAppleSignIn = () => {
        console.log("Sign in with Apple");
    };


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm h-20  flex justify-center items-center">
                    <Logo titleColor="gray" titleShade="800" esloganColor="gray" esloganShade="500" logoColor="bg-gray-200" />
                </div>
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={dataUser.email}
                                    onChange={handleChange}
                                />
                                {errorUser.email && <p className="text-red-500 text-sm">{errorUser.email}</p>}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="" className="font-semibold text-blue-600 hover:text-blue-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={dataUser.password}
                                    onChange={handleChange}
                                />
                                <div className="flex items-center gap-2 my-6">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">Remember me</Label>
                                </div>
                                {errorUser.password && <p className="text-red-500 text-sm">{errorUser.password}</p>}
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                gradientMonochrome="cyan"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                disabled={!dataUser.email || !dataUser.password}
                            >
                                Sign in
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6 flex flex-col items-center">
                        <p className="text-sm text-gray-500 mb-4">Or continue with</p>
                        <div className="flex space-x-4">
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="flex items-center justify-center w-44 h-12 rounded-md border font-semibold border-gray-300 bg-white text-gray-700 transition-all  hover:bg-red-700 hover:text-white"
                            >
                                <FaGoogle className="mr-2 h-5 w-5" />
                                Google
                                <span className="sr-only">Google</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleAppleSignIn}
                                className="flex items-center justify-center w-44 h-12 rounded-md border font-semibold border-gray-300 bg-white text-gray-700 transition-all hover:bg-slate-900 hover:text-white"
                            >
                                <FaApple className="mr-2 h-6 w-6 -translate-y-0.5" />
                                Apple
                                <span className="sr-only">Apple</span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 w-full text-center">
                        <span className="text-sm text-gray-500">Don't have an account? <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-500">Sing up</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
}
