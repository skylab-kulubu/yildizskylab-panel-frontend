"use client";

import { bebas_neue } from "@/utils/fonts";

export default function TeamModal({ closeModal }: { closeModal: () => void }) {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1500] outline-none focus:outline-none">
                <div className="relative w-[90%] sm:w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-customLightPurple outline-none focus:outline-none">
                        <div className="flex items-center justify-center p-3  rounded-none">
                            {/* <h3 className="text-3xl font-semibold">
                                Sample Modal
                            </h3> */}
                            <button
                                className=" mx-auto bg-transparent border-0 text-black float-right text-3xl leading-normal font-semibold outline-none focus:outline-none"
                                onClick={closeModal}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-12 h-12 hover:bg-gray-300 rounded p-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col justify-center items-center px-6">
                            {/* Change Name */}
                            <ChangeName />

                            <ChangeDescription />

                            <DeleteProjectButton
                                handleDelete={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div
                className="opacity-50 fixed inset-0 z-[996] bg-black w-screen h-screen"
                onClick={closeModal}
            ></div>
        </>
    );
}

const ChangeName = () => {
    return (
        <div className="flex flex-row flex-nowrap w-full h-full bg-customLightPink mb-8">
            <div className="w-[60%] h-full">
                <input className="w-full text-left text-xl text-customDarkPurple bg-customLightPink h-full px-4  py-3 rounded-none outline-none" />
            </div>
            <div className="w-[40%] h-full  ">
                <button className="w-full  items-center text-center bg-customDarkPurple text-customLightPink text-base sm:text-xl  py-3 px-2 hover:scale-105 hover:bg-customAccent  hover:text-customDarkPurple hover:shadow-xl transition-all duration-150 ease-in-out whitespace-nowrap">
                    <span className='font-bebas'>
                        Proje Ismini Degistir
                    </span>
                </button>
            </div>
        </div>
    );
};

const ChangeDescription = () => {
    return (
        <div className="flex flex-col flex-nowrap w-full h-full bg-customLightPink mb-8">
            <div className="w-full h-full">
                <textarea
                    rows={2}
                    className="w-full text-left text-xl text-customDarkPurple bg-customLightPink h-full px-4  py-3 rounded-none outline-none "
                />
            </div>
            <div className="w-full h-full  ">
                <button className="w-full  items-center text-center bg-customDarkPurple text-customLightPink text-base sm:text-xl  py-3 px-2 hover:scale-105 hover:bg-customAccent  hover:text-customDarkPurple hover:shadow-xl transition-all duration-150 ease-in-out whitespace-nowrap">
                    <span className='font-bebas'>
                        Proje Aciklamasini Degistir
                    </span>
                </button>
            </div>
        </div>
    );
};

const DeleteProjectButton = ({
    handleDelete,
}: {
    handleDelete: () => void;
}) => {
    return (
        <div className="flex flex-row flex-nowrap w-full h-full bg-customLightPink mb-8">
            <div className="w-full h-full">
                <button
                    className="w-full items-center text-center bg-[#680808] text-customLightPink text-base sm:text-xl  py-3 px-2 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-xl  hover:bg-[#9c0b0b] hover:text-customDarkPurple"
                    onClick={handleDelete}
                >
                    <span className='font-bebas'>Projeyi Sil</span>
                </button>
            </div>
        </div>
    );
};
