"use client"
import { useEffect, useState } from "react";



const [scrollY, setScrollY] = useState(0);
const [isClient, setIsClient] = useState(false);

useEffect(() => {
    if (typeof window !== "undefined") {
    setIsClient(true);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }
}, []);

console.log(scrollY)