import Link from "next/link";

export default function MemberTagItem({
    name,
    href,
}: {
    name: string;
    href: string;
}) {
    return (
        <Link
            className="px-4 py-1 text-customDarkPurple bg-customLightPurple text-base hover:bg-customLightPink hover:text-customDarkPurple transition-all duration-150 ease-in-out hover:scale-105 whitespace-nowrap"
            href={href}
        >
            {name}
        </Link>
    );
}
