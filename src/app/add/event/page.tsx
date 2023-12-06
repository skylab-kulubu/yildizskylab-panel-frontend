"use client";
import { bebas_neue, inter } from "@/utils/fonts";
import { addEventValidations } from "@/utils/validations";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Page = () => {
    const { data: session } = useSession();

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            date: "",
            location: "",
            teams: [],
        },
        validationSchema: addEventValidations,
        onSubmit: (values) => {
            addEvent(
                values.name,
                values.description,
                values.date,
                values.teams,
                values.location
            );
            console.log(values);
        },
    });
    const [teamSelection, setTeamSelection] = useState<any>([]);

    const teams = [
        "airlab",
        "algolab",
        "chainlab",
        "gamelab",
        "mobilab",
        "skysec",
        "skysis",
        "weblab",
    ];

    const handleTeamSelection = (e: any) => {
        const teamArray = teamSelection;
        if (teamArray.includes(e.target.id)) {
            const index = teamArray.indexOf(e.target.id);
            teamArray.splice(index, 1);
            setTeamSelection(teamArray);
            formik.setFieldValue("teams", teamArray);
        } else {
            teamArray.push(e.target.id);
            setTeamSelection(teamArray);
            formik.setFieldValue("teams", teamArray);
        }
    };

    async function addEvent(
        eventName: string,
        description: string,
        date: string,
        eventTeams: string[],
        location: string
    ) {
        const response = await fetch("/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session?.user}`,
            },
            body: JSON.stringify({
                eventName,
                description,
                date,
                team: eventTeams.toString(),
            }),
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <form
                onSubmit={formik.handleSubmit}
                className={`font-bebas mx-0  sm:mx-[16%] scale-75 md:scale-75 lg:scale-100 my-4 sm:my-4 md:my-8 lg:my-24 tracking-[0.1em] text-lg text-customLightPink`}
            >
                <label htmlFor="name">Etkinlik Adı</label>
                <input
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required={true}
                    placeholder="Etkinliğin Adını Giriniz"
                    className={`font-inter mb-16 bg-transparent border-b-2 text-base sm:text-md tracking-[0.1em] focus:outline-none block w-full sm:w-[30rem] px-2 sm:px-5 p-2  placeholder:tracking-[0.1em] placeholder-customLightPurple  focus:border-customAccent sm:hover:border-customAccent border-customLightPink ${
                        formik.errors.name && formik.touched.name
                            ? "border-red-500 focus:border-red-500"
                            : "focus:border-[#27A68E] hover:border-[#27A68E]  border-[#7C77B3]"
                    }`}
                />
                <label htmlFor="description">Etkinlik Açıklaması</label>
                <input
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required={true}
                    placeholder="Etkinlik Açıklamasını Giriniz"
                    className={`font-inter mb-16 bg-transparent border-b-2 text-base sm:text-md tracking-[0.1em] focus:outline-none block w-full sm:w-[30rem] px-2 sm:px-5 p-2  placeholder:tracking-[0.1em] placeholder-customLightPurple  focus:border-customAccent sm:hover:border-customAccent border-customLightPink ${
                        formik.errors.description && formik.touched.description
                            ? "border-red-500 focus:border-red-500"
                            : "focus:border-[#27A68E] hover:border-[#27A68E]  border-[#7C77B3]"
                    }`}
                />
                <label htmlFor="date">Etkinlik Tarihi</label>
                <input
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required={true}
                    placeholder="Etkinlik Tarihi Giriniz"
                    className={`font-inter mb-16 bg-transparent border-b-2 text-base sm:text-md tracking-[0.1em] focus:outline-none block w-full sm:w-[30rem] px-2 sm:px-5 p-2  placeholder:tracking-[0.1em] placeholder-customLightPurple  focus:border-customAccent sm:hover:border-customAccent border-customLightPink ${
                        formik.errors.date && formik.touched.date
                            ? "border-red-500 focus:border-red-500"
                            : "focus:border-[#27A68E] hover:border-[#27A68E]  border-[#7C77B3]"
                    }`}
                />
                <label htmlFor="location">Etkinlik Konumu</label>
                <input
                    name="location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required={true}
                    placeholder="Etkinlik Konumunu Giriniz"
                    className={`font-inter mb-16 bg-transparent border-b-2 text-base sm:text-md tracking-[0.1em] focus:outline-none block w-full sm:w-[30rem] px-2 sm:px-5 p-2  placeholder:tracking-[0.1em] placeholder-customLightPurple  focus:border-customAccent sm:hover:border-customAccent border-customLightPink ${
                        formik.errors.location && formik.touched.location
                            ? "border-red-500 focus:border-red-500"
                            : "focus:border-[#27A68E] hover:border-[#27A68E]  border-[#7C77B3]"
                    }`}
                />
                <h2 className="mb-4">Etkinlikte Yer Alan Ekipler:</h2>
                <div className="w-full sm:w-[30rem] mb-16 flex gap-2 flex-wrap">
                    {teams.map((team, index) => {
                        return (
                            <div
                                key={index}
                                id={team}
                                onClick={(e) => handleTeamSelection(e)}
                                className={`${
                                    teamSelection.includes(team)
                                        ? "bg-customLightPink"
                                        : "bg-customLightPink/50"
                                } px-4 py-1 cursor-pointer text-customDarkPurple`}
                            >
                                {team}
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center sm:justify-start">
                    <button
                        type="submit"
                        disabled={!formik.isValid}
                        className="text-center px-14 py-2 sm:hover:bg-customAccent bg-customLightPink text-customDarkPurple disabled:hover:bg-gray-400 disabled:bg-gray-400"
                    >
                        Etkinlik Ekle
                    </button>
                </div>
            </form>
        </>
    );
};

export default Page;
