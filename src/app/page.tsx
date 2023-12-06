"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const { data: session } = useSession();

    async function promoteToYK() {
        // /users/:id/promote
        const res = await fetch(
            process.env.BACKEND_URL +
                "/users/" +
                "640f98c61d23aca9bfabf865" +
                "/promote",
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session?.user?.accessToken}`,
                },
            }
        );
        console.log(res);
    }

    async function getUserByID() {
        // 640f98c61d23aca9bfabf865
        const res = await fetch(
            process.env.BACKEND_URL + "/users/" + "640f98c61d23aca9bfabf865",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${session?.user?.token}`,
                },
            }
        );
        console.log(res);
    }

    return (
        <>
            <div className="text-white ">
                {JSON.stringify(session, null, 4)}
            </div>
            {/* Simple Button */}
            <div className="font-bebas px-40 py-8">
                <button
                    onClick={promoteToYK}
                    className="w-full text-black bg-[#27A68E] focus:ring-4 focus:outline-none focus:ring-primary-300 px-5 py-2 sm:py-3 text-center transition-all duration-150 ease-in-out hover:scale-105 hover:bg-[#EADAFF] disabled:bg-gray-400"
                >
                    Test
                </button>
            </div>
        </>
    );
}
