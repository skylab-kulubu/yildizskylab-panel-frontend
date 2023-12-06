"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import "./register.css";
import { bebas_neue } from "@/utils/fonts";
import { marck_script } from "@/utils/fonts";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Login() {
    const { data } = useSession();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            error: "",
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            const res = await fetch(process.env.BACKEND_URL + "/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            console.log(res);

            if (res.status === 201) {
                return redirect("/login");
            } else {
                // bag.setErrors({ error: "Kayıt başarısız" })
            }
        },
    });
    return (
        <>
            <section className="bg-[#06032c] ">
                <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-full sm:py-28">
                    <Link href={"/"} className="pt-14  pb-4 sm:hidden">
                        <Image src={logo} alt="logo" className=" " />
                    </Link>

                    <div className="w-full md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <form
                                className="space-y-4 md:space-y-6"
                                action="#"
                                onSubmit={formik.handleSubmit}
                            >
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        className={`bg-transparent border-b-2 text-[#fff] sm:text-md  focus:outline-none block w-full p-2.5 placeholder-[#7C77B3] ${
                                            formik.errors.firstName &&
                                            formik.touched.firstName
                                                ? "border-red-500 focus:border-red-500"
                                                : "focus:border-[#27A68E] hover:border-[#27A68E]  border-[#7C77B3]"
                                        }}`}
                                        placeholder="First Name"
                                        required={true}
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        className={`bg-transparent border-b-2 text-[#fff] sm:text-md  focus:outline-none block w-full p-2.5 placeholder-[#7C77B3] ${
                                            formik.errors.lastName &&
                                            formik.touched.lastName
                                                ? "border-red-500 focus:border-red-500"
                                                : "focus:border-[#27A68E] hover:border-[#27A68E]  border-[#7C77B3]"
                                        }}`}
                                        placeholder="Last Name"
                                        required={true}
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={`bg-transparent border-b-2 text-[#fff] sm:text-md  focus:outline-none block w-full p-2.5 placeholder-[#7C77B3] ${
                                            formik.errors.email &&
                                            formik.touched.email
                                                ? "border-red-500 focus:border-red-500"
                                                : "focus:border-[#27A68E] hover:border-[#27A68E]  border-[#7C77B3]"
                                        }}`}
                                        placeholder="E-mail"
                                        required={true}
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Sifre"
                                        className={`bg-transparent border-b-2 text-[#fff] sm:text-md  focus:outline-none block w-full p-2.5 placeholder-[#7C77B3] ${
                                            formik.errors.password &&
                                            formik.touched.password
                                                ? "border-red-500 focus:border-red-500"
                                                : "focus:border-[#27A68E] hover:border-[#27A68E]  border-[#7C77B3]"
                                        }}`}
                                        required={true}
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.errors.error && (
                                    <div className="text-red-500 text-sm text-center border-b border-red-500 pb-2">
                                        {formik.errors.error}
                                    </div>
                                )}
                                <div className="pb-2">
                                    <div className="font-bebas">
                                        <button
                                            type="submit"
                                            id="submit-text"
                                            disabled={
                                                formik.isSubmitting ||
                                                !formik.isValid
                                            }
                                            className="w-full text-black bg-[#27A68E] focus:ring-4 focus:outline-none focus:ring-primary-300 px-5 py-2 sm:py-3 text-center transition-all duration-150 ease-in-out hover:scale-105 hover:bg-[#EADAFF] disabled:bg-gray-400"
                                        >
                                            Kayıt Ol
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <Link href="/#" className="text-[#EADAFF]">
                                        Sifremi Unuttum
                                    </Link>
                                    <Link
                                        href="/login"
                                        className="text-[#EADAFF]"
                                    >
                                        Giris Yap
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
