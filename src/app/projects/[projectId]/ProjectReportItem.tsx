import { bebas_neue } from "@/utils/fonts";
import Link from "next/link";

export default function ProjectReportItem({
    date,
    description,
}: {
    date?: string;
    description: string;
}) {
    return (
        <div className="flex flex-row justify-between items-center gap-8 py-4 w-full h-full">
            <div className="text-customLightPink text-2xl sm:text-4xl ">
                <span className="font-bebas">{date} </span>
            </div>
            <div className="text-customLightPurple text-xl ">{description}</div>
        </div>
    );
}
