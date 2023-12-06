import { Event } from "@/app/types/types";
import Link from "next/link";

export default function EventsListItem({ event }: { event: Event }) {
    return (
        <>
            <Link
                href={`/events/${event._id}`}
                className={`font-bebas tracking-[0.2em] sm:tracking-[0.3em] w-full h-full bg-customAccent text-customLightPink transition-all md:hover:scale-[102%] p-1 sm:p-0 md:hover:p-1 `}
            >
                <div className="p-4 flex justify-between text-xl md:text-4xl lg:text-5xl bg-customDarkPurple">
                    <div className="md:min-w-[25%] w-[36%]  md:w-[25%]">
                        {event?.date?.toLocaleUpperCase()}
                    </div>
                    <div className="w-full max-w-[65%] flex flex-col text-ellipsis">
                        <h2>{event.eventName.toLocaleUpperCase()}</h2>
                        <p
                            className={`font-inter tracking-wider text-ellipsis h-8 md:h-12 text-xs md:text-base break-words overflow-hidden`}
                        >
                            {event.description.slice(0, 84) + " ..."}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );
}
