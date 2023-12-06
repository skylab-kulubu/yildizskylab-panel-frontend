"use client";
import { useEffect, useState } from "react";
import Modal from "@/ui/Modals";
import MemberTagItem from "@/ui/MemberTagItem/MemberTagItem";
import ProjectReportItem from "./ProjectReportItem";
import { useSession } from "next-auth/react";
import { Project } from "@/app/types/types";

export default function Page({ params }: { params: { projectId: string } }) {
    const { data: session } = useSession();
    const [project, setProject] = useState<Project>();

    useEffect(() => {
        const res = fetch(
            process.env.BACKEND_URL + "/projects/all/" + params.projectId,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session?.user?.accessToken}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProject(data);
            });
    }, []);
    return (
        <>
            <div className=" text-customLightPink w-[90%] sm:w-[70%] mx-auto tracking-widest my-5 lg:my-8 flex flex-col justify-center pt-24 sm:pt-16 ">
                <div className="grid md:grid-cols-3 justify-center items-center md:justify-between md:items-center gap-x-2 sm:gap-x-4">
                    <div className="col-span-3 md:col-span-2 flex items-center mt-4 md:mt-0 md:items-start justify-center flex-col gap-4">
                        <h3 className="text-4xl lg:text-5xl ">
                            <span className="font-bebas">
                                {project?.projectName}
                            </span>
                        </h3>
                        <span className="text-customLightPurple text-base">
                            {project?.date}
                        </span>
                        <p className="text-base lg:text-md text-customLightPink">
                            {project?.description}
                        </p>
                        <div className="my-6">
                            <h4 className="text-lg lg:text-2xl py-4">
                                3 Katilimci
                            </h4>
                            <div className="flex flex-row  justify-center md:justify-start items-center gap-2 mt-2  flex-wrap">
                                <MemberTagItem
                                    name="Furkan Kartal"
                                    href="/ahmet"
                                />
                                <MemberTagItem
                                    name="Melih Yelman"
                                    href="/mehmet"
                                />
                                <MemberTagItem
                                    name="Gokdeniz Cakir"
                                    href="/furkan"
                                />
                                <MemberTagItem
                                    name="Dogukan Yalcin"
                                    href="/dogukan"
                                />
                                <MemberTagItem
                                    name="Dogukan Yalcindaksmdaslkd"
                                    href="/dogukan"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex col-span-3 mt-3 md:mt-0 md:col-span-1 flex-row items-center justify-center md:flex-col md:items-end md:justify-center gap-2">
                        <Modal
                            className="text-customAccent font-semibold text-lg px-2 py-1  transition-all duration-150 ease-in-out hover:scale-105"
                            text="Ayarlar"
                            type="project"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col gap-2 mt-24">
                    <h3 className="text-4xl lg:text-5xl mb-4">
                        <span className="font-bebas">Proje Raporlari</span>
                    </h3>
                    <ProjectReportItem
                        date={project?.date}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur ut semper lorem, in laoreet leo.
                            Nulla id odio vel metus euismod posuere eu et metus.Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur ut semper lorem, in laoreet leo."
                    />
                    <ProjectReportItem
                        date="9 Temmuz 2003"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur ut semper lorem, in laoreet leo.
                            Nulla id odio vel metus euismod posuere eu et metus.Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur ut semper lorem, in laoreet leo."
                    />
                    <ProjectReportItem
                        date={project?.date}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur ut semper lorem, in laoreet leo.
                            Nulla id odio vel metus euismod posuere eu et metus.Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur ut semper lorem, in laoreet leo."
                    />
                </div>
            </div>
        </>
    );
}
