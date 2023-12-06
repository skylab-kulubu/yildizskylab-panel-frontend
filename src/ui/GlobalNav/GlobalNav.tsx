"use client";
// import GlobalNav.css
import Image from "next/image";
import logo from "../../assets/images/logo_text.png";
import ytu_logo from "../../assets/images/ytu_yazi_logo.png";
import "./GlobalNav.modules.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
export type NavBarItem = {
    label: string;
    href: string;
    children?: NavBarItem[];
};

export function GlobalNav({ navItems }: { navItems: NavBarItem[] }) {
    const [showDrawer, setShowDrawer] = useState(false);
    const path = usePathname();
    const router = useRouter();
    const isBack = path && path.split("/").length > 2 ? true : false;

    const { data: session } = useSession();
    function closeDrawer() {
        setShowDrawer(false);
        document.body.style.overflow = "auto";
    }

    function openDrawer() {
        if (isBack) {
            router.back();
        } else {
            setShowDrawer(true);
            document.body.style.overflow = "hidden";
        }
    }

    return (
        <>
            <div className="sticky z-[995] top-0 m-0 p-0 ">
                <header
                    className={
                        " mt-0 ml-0 w-full h-16 z-50 flex  justify-center items-center px-6 sm:px-10  py-14 sm:py-16 bg-[#06032c] "
                    }
                >
                    {isBack ? (
                        <BiArrowBack
                            className="text-[#7C77B3] flex-none sm:ml-0 w-16 sm:w-20 h-auto p-4 cursor-pointer "
                            onClick={openDrawer}
                        />
                    ) : (
                        <RxHamburgerMenu
                            className="text-[#7C77B3] flex-none sm:ml-0 w-16 sm:w-20 h-auto  p-4 cursor-pointer "
                            onClick={openDrawer}
                        />
                    )}
                    <div className="w-64 h-auto sm:w-auto   justify-center flex items-center sm:space-x-1 grow">
                        <Link href="/">
                            <Image
                                priority
                                src={logo}
                                alt={"logo"}
                                className="w-48 sm:w-64 "
                                onClick={closeDrawer}
                            />
                        </Link>
                        <div className='font-marck'>
                            <h1
                                id="text-panel"
                                className="text-[#27A68E] text-2xl sm:text-3xl  "
                            >
                                Panel
                            </h1>
                        </div>
                    </div>
                </header>
            </div>

            {/* Gray Overlay */}
            <div
                className={
                    "fixed top-0 right-0 w-full h-full  bg-black transition-all duration-150 ease-in-out  " +
                    (showDrawer ? " opacity-20 z-[996]" : " opacity-0 -z-50")
                }
                onClick={closeDrawer}
            ></div>

            {/* Drawer */}
            <div
                className={
                    "fixed top-0 w-screen tracking-[0.2rem] sm:w-1/4 h-full  bg-[#7C77B3] transition-all duration-300 ease-in-out z-[999]" +
                    (showDrawer ? " left-0" : " -left-full")
                }
            >
                <div className="flex flex-col py-7 px-6 items-center justify-between h-full">
                    <AiOutlineClose
                        className="text-white text-4xl  m-4 cursor-pointer transition-all duration-150 ease-in-out "
                        onClick={closeDrawer}
                    />
                    <div className="text-[#06032c] text-2xl space-y-8 text-center uppercase flex flex-col  ">
                        {navItems.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="sm:hover:scale-110 transition-all duration-150 ease-in-out text-2xl  md:text-3xl"
                                    onClick={closeDrawer}
                                >
                                    <span className='font-bebas'>
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        })}
                        {session?.user ? (
                            <a
                                className="hover:translate-x-2 transition-all duration-150 ease-in-out text-2xl  md:text-3xl cursor-pointer"
                                onClick={() => signOut()}
                            >
                                <span className='font-bebas'>
                                    Çıkış Yap
                                </span>
                            </a>
                        ) : (
                            <a
                                className="hover:translate-x-2 transition-all duration-150 ease-in-out text-2xl  md:text-3xl cursor-pointer"
                                onClick={() => signIn()}
                            >
                                <span className='font-bebas'>
                                    Giris Yap
                                </span>
                            </a>
                        )}
                    </div>
                    <div className=" mb-6 px-16 sm:px-1 lg:px-8">
                        <Image src={ytu_logo} alt={"logo"} className="ytü" />
                    </div>
                </div>
            </div>
        </>
    );
}
