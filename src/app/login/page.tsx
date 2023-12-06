"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import "./login.css";
import { bebas_neue } from "@/utils/fonts";
import { marck_script } from "@/utils/fonts";
import { useFormik } from "formik";
import { loginValidations } from "../../utils/validations";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
    const { data } = useSession();
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            error: "",
        },
        validationSchema: loginValidations,
        onSubmit: async (values, bag) => {
            console.log("submit");
            const res = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
                callbackUrl: "/",
            });
            if (res!.error) {
                bag.setErrors({ error: "Böyle bir kullanıcı bulunamadı" });
            } else {
                router.push("/");
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
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={`bg-transparent border-b-2 border-[#7C77B3] text-[#fff] sm:text-md  focus:outline-none block w-full p-2.5 placeholder-[#7C77B3] ${
                                            formik.errors.email &&
                                            formik.touched.email
                                                ? "border-red-500 focus:border-red-500"
                                                : "focus:border-[#27A68E] hover:border-[#27A68E] border-[#7C77B3]"
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
                                        className={`bg-transparent border-b-2 border-[#7C77B3] text-[#fff] sm:text-md  focus:outline-none block w-full p-2.5 placeholder-[#7C77B3] ${
                                            formik.errors.password &&
                                            formik.touched.password
                                                ? "border-red-500 focus:border-red-500"
                                                : "focus:border-[#27A68E] hover:border-[#27A68E]  border-[#7C77B3]"
                                        }}`}
                                        required={true}
                                        value={formik.values.password}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                {formik.errors.error && (
                                    <div className="text-red-500 text-sm text-center border-b border-red-500 py-2">
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
                                            Giris Yap
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <Link href="#" className="text-[#EADAFF]">
                                        Sifremi Unuttum
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="text-[#EADAFF]"
                                    >
                                        Kayit Ol
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
