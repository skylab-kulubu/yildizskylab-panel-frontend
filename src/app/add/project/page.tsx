"use client";
import { bebas_neue, inter } from "@/utils/fonts";
import React from "react";
import { useFormik } from "formik";
import { addProjectValidations } from "@/utils/validations";
import { useSession } from "next-auth/react";

const Page = () => {
    const { data: session } = useSession();
    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
        },
        validationSchema: addProjectValidations,
        onSubmit: (values) => {
            addProject(values.name, values.description, []);
            console.log(values);
        },
    });

    async function addProject(
        projectName: string,
        description: string,
        teams: string[] = []
    ) {
        const response = await fetch(process.env.BACKEND_URL + "/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session?.user}`,
            },
            body: JSON.stringify({
                projectName,
                description,
                teams,
            }),
        });

        const result = response.json();
        console.log(result);
    }

    return (
        <>
            <form
                onSubmit={formik.handleSubmit}
                className={`font-bebas mx-0 sm:mx-[16%] scale-75 md:scale-75 lg:scale-100 mt-4 sm:mt-4 md:mt-8 lg:mt-24 tracking-[0.1em] text-lg text-customLightPink`}
            >
                <label htmlFor="name">Proje Adı</label>
                <input
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required={true}
                    placeholder="Projenin Adını Giriniz"
                    className={`font-inter 
          mb-16 bg-transparent border-b-2 text-base sm:text-md tracking-[0.1em] focus:outline-none block w-full sm:w-[30rem] px-2 sm:px-5 p-2  placeholder:tracking-[0.1em] placeholder-customLightPurple  focus:border-customAccent sm:hover:border-customAccent border-customLightPink ${
              formik.errors.name && formik.touched.name
                  ? "border-red-500 focus:border-red-500"
                  : "focus:border-[#27A68E] hover:border-[#27A68E] border-[#7C77B3]"
          }`}
                />
                <label htmlFor="description">Proje Açıklaması</label>
                <input
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required={true}
                    placeholder="Proje Açıklamasını Giriniz"
                    className={`font-inter mb-16 bg-transparent border-b-2 text-base sm:text-md tracking-[0.1em] focus:outline-none block w-full sm:w-[30rem] px-2 sm:px-5 p-2  placeholder:tracking-[0.1em] placeholder-customLightPurple  focus:border-customAccent sm:hover:border-customAccent border-customLightPink ${
                        formik.errors.description && formik.touched.description
                            ? "border-red-500 focus:border-red-500"
                            : "focus:border-[#27A68E] hover:border-[#27A68E] border-[#7C77B3]"
                    }`}
                />
                <div className="flex justify-center sm:justify-start">
                    <button
                        type="submit"
                        disabled={!formik.isValid}
                        className="text-center px-14 py-2 sm:hover:bg-customAccent bg-customLightPink text-customDarkPurple disabled:hover:bg-gray-400 disabled:bg-gray-400"
                    >
                        Proje Ekle
                    </button>
                </div>
            </form>
        </>
    );
};

export default Page;
