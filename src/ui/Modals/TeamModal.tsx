"use client";
import { bebas_neue } from "@/utils/fonts";
import { useState } from "react";

export default function TeamModal({ closeModal }: { closeModal: () => void }) {
    const [memberTags, setMemberTags] = useState<string[]>([
        "Dogukan Yalcin",
        "Furkan Kartal",
        "Melih Yelman",
        "Gokdeniz Cakir",
    ]);

    const [projectTags, setProjectTags] = useState<string[]>([
        "ARTAM",
        "ARTAM Heavy",
        "AKU",
        "DemirKazik",
    ]);

    return (
        <>
            <div className="justify-center mt-0 items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1500] outline-none focus:outline-none  ">
                <div className="relative w-[90%] sm:w-auto md:w-[60%] my-6 mx-auto max-w-3xl">
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
                            {/* Uye Ekle */}
                            <div className="px-2 py-4 pt-2  flex flex-wrap rounded-none bg-customLightPink w-full">
                                <DropDownTagInput
                                    tags={memberTags}
                                    setTags={setMemberTags}
                                />
                            </div>
                            <button className="items-center text-center bg-customDarkPurple text-customLightPink text-base sm:text-xl w-full py-3 px-2 mb-8 hover:scale-105 hover:bg-customAccent  hover:text-customDarkPurple hover:shadow-xl transition-all duration-150 ease-in-out">
                                <span className='font-bebas'>
                                    Uye Guncelle
                                </span>
                            </button>

                            {/* Proje Ekle */}
                            <div className="px-2 py-4 pt-2  flex flex-wrap rounded-none bg-customLightPink w-full">
                                <DropDownTagInput
                                    tags={projectTags}
                                    setTags={setProjectTags}
                                />
                            </div>
                            <button className="items-center text-center bg-customDarkPurple text-customLightPink text-base sm:text-xl  w-full py-3 px-2 mb-8 hover:scale-105 hover:bg-customAccent  hover:text-customDarkPurple hover:shadow-xl transition-all duration-150 ease-in-out">
                                <span className='font-bebas'>
                                    Proje Ekle / Cikar
                                </span>
                            </button>

                            {/* Change Name */}
                            <ChangeName />

                            <ChangeDescription />

                            <DeleteTeamButton
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

const TagItem = ({
    tag,
    removeTag,
}: {
    tag: string;
    removeTag?: () => void;
}) => {
    return (
        <span className="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded-sm cursor-pointer bg-customLightPurple text-slate-900 hover:scale-105 transition-all duration-150 ease-in-out    ">
            {tag}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-3 hover:text-customLightPink"
                viewBox="0 0 20 20"
                onClick={removeTag}
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                />
            </svg>
        </span>
    );
};

const DropDownTagInput = ({
    tags,
    setTags,
}: {
    tags: string[];
    setTags: (tags: string[]) => void;
}) => {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const removeTag = (index: number) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    const addTag = (tag: string) => {
        if (tags.includes(tag)) return;
        setTags([...tags, tag]);
        setInputValue("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTag(inputValue);
            setSuggestions([]);
        } else if (e.key === "Escape") {
            setSuggestions([]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (e.target.value.length === 0) setSuggestions([]);
        setSuggestions(["Dogukan", "Dogukan Yal", "Dogukan Yalcin"]);
    };

    const handleSuggestionClick = (tag: string) => {
        console.log(tag);
        addTag(tag);
        setSuggestions(suggestions.filter((suggestion) => suggestion !== tag));
    };

    return (
        <div className="flex flex-wrap w-full">
            {tags.map((tag, index) => (
                <TagItem
                    key={tag}
                    tag={tag}
                    removeTag={() => removeTag(index)}
                />
            ))}
            <div className="relative">
                <input
                    className="border px-4 py-2 outline-none text-customDarkPurple"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />

                {suggestions.length > 0 && (
                    <div className="absolute top-12 bg-customAccent text-customDarkPurple shadow-lg rounded-none z-50 text-xl font-thin whitespace-nowrap">
                        {suggestions.map((suggestion) => (
                            <div
                                key={suggestion}
                                className="px-3 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-900 t"
                                onClick={() =>
                                    handleSuggestionClick(suggestion)
                                }
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const ChangeName = () => {
    return (
        <div className="flex flex-row flex-nowrap w-full h-full bg-customLightPink mb-8">
            <div className="w-[60%] h-full">
                <input className="w-full text-left text-xl text-customDarkPurple bg-customLightPink h-full px-4  py-3 rounded-none outline-none" />
            </div>
            <div className="w-[40%] h-full  ">
                <button className="w-full  items-center text-center bg-customDarkPurple text-customLightPink text-base sm:text-xl  py-3 px-2 hover:scale-105 hover:bg-customAccent  hover:text-customDarkPurple hover:shadow-xl transition-all duration-150 ease-in-out">
                    <span className='font-bebas'>
                        Ekip Ismini Degistir
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
                        Ekip Aciklamasini Degistir
                    </span>
                </button>
            </div>
        </div>
    );
};

const DeleteTeamButton = ({ handleDelete }: { handleDelete: () => void }) => {
    return (
        <div className="flex flex-row flex-nowrap w-full h-full bg-customLightPink mb-8">
            <div className="w-full h-full">
                <button
                    className="w-full items-center text-center bg-[#680808] text-customLightPink text-base sm:text-xl  py-3 px-2 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-xl  hover:bg-[#9c0b0b] hover:text-customDarkPurple"
                    onClick={handleDelete}
                >
                    <span className='font-bebas'>Ekip Sil</span>
                </button>
            </div>
        </div>
    );
};
