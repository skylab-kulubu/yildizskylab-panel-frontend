"use client";
import { useState } from "react";
import TeamModal from "./TeamModal";
import ProjectModal from "./ProjectModal";

export default function Modal({
    className,
    text,
    type,
}: {
    className: string;
    text: string;
    type: "team" | "project";
}) {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    const currentModal = () => {
        switch (type) {
            case "team":
                return <TeamModal closeModal={closeModal} />;
            case "project":
                return <ProjectModal closeModal={closeModal} />;
            default:
                return <></>;
        }
    };

    return (
        <>
            <button className={className} onClick={() => setShowModal(true)}>
                {text}
            </button>
            {showModal && currentModal()}
        </>
    );
}
