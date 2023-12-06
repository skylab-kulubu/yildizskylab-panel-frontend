"use client";

import Modal from "@/ui/Modals";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Member } from "@/app/types/types";

const MemberPage: React.FC<{ params: { memberId: string } }> = ({ params }) => {
    const { data: session } = useSession();
    const [member, setMember] = useState<Member>();
    const fetcher = (url: string) =>
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session?.user?.accessToken}`,
            },
        }).then((res) => res.json());

    const { data, error } = useSWR(
        process.env.BACKEND_URL + "/users/" + params.memberId,
        fetcher
    );

    useEffect(() => {
        if (data) {
            console.log(data);
            setMember(data);
        }
    }, [data]);

    return (
        <>
            <section className="mt-12 lg:mt-48 lg:mx-48 flex flex-col lg:flex-row items-center lg:items-start justify-between text-customLightPink tracking-wider">
                <div className="mb-6 text-center lg:text-left">
                    <div className=" lg:text-xl font-thin">
                        <div className="text-3xl lg:text-5xl mb-6 font-medium">
                            {member?.firstName?.toUpperCase()}{" "}
                            {member?.lastName?.toUpperCase()}
                        </div>
                        {/* <p>{member.university}</p> */}
                        <p>Yıldız Teknik Üniversitesi</p>
                        {/* <p>{member.department}</p> */}
                        <p>Endüstri Mühendisliği</p>
                        <p>{member?.email}</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-start space-y-1 lg:space-y-0 lg:space-x-12 mt-8 lg:w-96">
                        <div className="text-lg lg:text-2xl flex justify-between lg:justify-center lg:flex-col">
                            <p>{member?.roles?.toString()}</p>
                            <p>{member?.team?.toString()}</p>
                        </div>
                    </div>
                </div>
                <ul className="text-customAccent flex flex-col items-center lg:items-start justify-start gap-3 mt-8 font-semibold tracking-[0.3em]">
                    <Modal
                        className="text-customAccent font-semibold text-lg transition-all duration-150 ease-in-out hover:scale-105"
                        text="Üye Ayarları"
                        type="team"
                    />
                    <Modal
                        className="text-customAccent font-semibold text-lg transition-all duration-150 ease-in-out hover:scale-105"
                        text="Rol Ayarları"
                        type="team"
                    />
                    <Modal
                        className="text-customAccent font-semibold text-lg transition-all duration-150 ease-in-out hover:scale-105"
                        text="Ekip Ayarları"
                        type="team"
                    />
                    <Modal
                        className="text-customAccent font-semibold text-lg transition-all duration-150 ease-in-out hover:scale-105"
                        text="Proje Ayarları"
                        type="team"
                    />
                </ul>
            </section>
        </>
    );
};
export default MemberPage;
