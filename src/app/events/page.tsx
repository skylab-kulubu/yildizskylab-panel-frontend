"use client";
import React from "react";
import PageTitle from "@/ui/PageTitle/PageTitle";
import EventsListItem from "@/ui/EventsListItem/EventsListItem";
import { Event } from "../types/types";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Events = () => {
    const { data: session } = useSession();
    const [events, setEvents] = useState<Event[]>([]);
    useEffect(() => {
        const res = fetch(process.env.BACKEND_URL + "/events", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session?.user?.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
                console.log(data);
            });
    }, []);

    return (
        <>
            <PageTitle title="Etkinlikler" />
            <div className="flex flex-col items-center justify-center gap-y-8 sm:gap-y-14 w-[90%] lg:pl-10 sm:w-[70%] h-full mx-auto md:mx-36 lg:mx-auto pb-10 pt-36">
                {events.length > 0 ? (
                    events.map((event) => {
                        return <EventsListItem key={event._id} event={event} />;
                    })
                ) : (
                    <div>Etkinlik bulunamadı.</div>
                )}
            </div>
        </>
    );
};

export default Events;
