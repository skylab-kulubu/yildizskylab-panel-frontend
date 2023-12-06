
import { useState, useEffect } from "react";

export const useScrollPosition = () : number => {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    async function handleScroll() {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    } ,[]);

    
    return scrollPosition;
};