"use client";
import React from "react";
import MemberTagItem from "@/ui/MemberTagItem/MemberTagItem";
import Modal from "@/ui/Modals";
import { useEffect, useState } from "react";
import { Event } from "@/app/types/types";
import { useSession } from "next-auth/react";

const Page = ({ params }: { params: { eventId: string } }) => {
    const { data: session } = useSession();
    const [event, setEvent] = useState<Event>();

    useEffect(() => {
        const res = fetch(
            process.env.BACKEND_URL + "/events/" + params.eventId,
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
                setEvent(data);
                console.log(data);
                console.log(event);
                console.log(event?.team);
            });
    }, []);

    return (
        <>
            {event && (
                <div className=" text-customLightPink w-[90%] sm:w-[70%] mx-auto tracking-widest my-5 lg:my-8 flex flex-col justify-center pt-24 sm:pt-16 ">
                    <div className="grid md:grid-cols-3 justify-center items-center md:justify-between md:items-center gap-x-2 sm:gap-x-4">
                        <div className="col-span-3 md:col-span-2 flex items-center mt-4 md:mt-0 md:items-start justify-center flex-col gap-4">
                            <h3 className="text-4xl lg:text-5xl ">
                                <span className="font-bebas">
                                    {event?.eventName}
                                </span>
                            </h3>
                            <span className="text-customLightPurple text-base">
                                {event?.date}
                            </span>
                            <p className="text-base text-center md:text-left lg:text-md text-customLightPink">
                                {event?.description}
                            </p>
                            <div className="my-6">
                                <div className="flex flex-row  justify-center md:justify-start items-center gap-10 mt-2  flex-wrap">
                                    {event?.team}
                                </div>
                            </div>
                        </div>
                        <div className="flex col-span-3 mt-3 md:mt-0 md:col-span-1 flex-row items-center justify-center md:flex-col md:items-end md:justify-center gap-2">
                            <Modal
                                className="text-customAccent font-semibold text-lg px-2 py-1  transition-all duration-150 ease-in-out hover:scale-105"
                                text="Ayarlar"
                                type="team"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Page;
