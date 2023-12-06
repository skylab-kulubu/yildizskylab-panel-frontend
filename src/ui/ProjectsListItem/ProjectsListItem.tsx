"use client";

import { Project } from "@/app/types/types";
import Link from "next/link";

export default function ProjectsListItem({ project }: { project: Project }) {
    return (
        <>
            <Link
                href={"/projects/" + project._id}
                className="w-full h-full bg-customLightPurple transition-all duration-150 ease-in-out sm:hover:scale-105 sm:hover:bg-customAccent cursor-pointer  sm:hover:p-2 flex flex-row justify-between"
            >
                <div className="w-[80%] h-full py-4 sm:py-7 bg-customLightPink ">
                    <div className="flex flex-row justify-between px-8 lg:px-12 items-center h-full space-x-5 ">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl   text-customDarkPurple  text-start justify-center flex-1">
                            <span className="font-bebas">
                                {project.projectName}
                            </span>
                        </h1>
                        <div className="flex flex-row flex-none  md:pr-6 lg:pr-12">
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-customDarkPurple  text-center justify-center">
                                <span className="font-bebas">
                                    {project.teams?.toString()}
                                </span>
                            </h1>
                        </div>
                        <div className="w-0.5 h-10 bg-customLightPurple hidden sm:block"></div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl hidden sm:block  text-customDarkPurple text-center justify-center flex-none ">
                            <span className="font-bebas">{project.date}</span>
                        </h1>
                    </div>
                </div>

                <div className="w-[20%] h-full py-4 sm:py-7">
                    <h1 className="text-md sm:text-2xl md:text-3xl lg:text-4xl  text-customLightPink  text-center justify-center  ">
                        <span className="font-bebas">Detay</span>
                    </h1>
                </div>
            </Link>
        </>
    );
}
