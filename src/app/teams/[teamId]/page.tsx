"use client";
import Modal from "@/ui/Modals";
import Image from "next/image";
import logo from "../../../assets/images/pink_logo.png";
import MemberTagItem from "@/ui/MemberTagItem/MemberTagItem";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Team } from "@/app/types/types";

export default function Page({ params }: { params: { teamId: string } }) {
    const { data: session } = useSession();
    const [team, setTeam] = useState<Team>();

    useEffect(() => {
        const res = fetch(
            process.env.BACKEND_URL + "/teams/all/" + params.teamId,
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
                // console.log(data);
                setTeam(data);
                console.log(team);
            });
    }, []);

    return (
        <>
            {team && (
                <div className=" text-customLightPink w-[90%] sm:w-[70%] mx-auto tracking-widest my-5 lg:my-8 flex flex-col justify-center pt-24 sm:pt-16 ">
                    <div className="grid md:grid-cols-3 justify-center items-center md:justify-between md:items-center gap-x-2 sm:gap-x-4">
                        <div className="col-span-3 md:col-span-2 flex items-center mt-4 md:mt-0 md:items-start justify-center flex-col gap-4">
                            <Image
                                src={logo}
                                alt={"logo"}
                                className="w-64 h-64 object-contain"
                            />
                            <h3 className="text-4xl lg:text-5xl ">
                                <span className="font-bebas">
                                    {team?.teamName}
                                </span>
                            </h3>
                            <p className="text-base lg:text-lg">
                                {team?.description}
                            </p>
                            <div className="my-4">
                                <h4 className="text-lg lg:text-2xl py-4">
                                    3 Üye
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
                                className="text-customAccent font-semibold text-lg px-2 py-1 transition-all duration-150 ease-in-out hover:scale-105"
                                text="Ayarlar"
                                type="team"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-6 mt-16">
                        <h3 className="text-4xl lg:text-5xl mb-2 mt-4">
                            <span className="font-bebas">Projeler</span>
                        </h3>

                        {/* <ProjectsListItem project={project} />
                    <ProjectsListItem project={project} />
                    <ProjectsListItem project={project} /> */}
                    </div>
                </div>
            )}
        </>
    );
}
