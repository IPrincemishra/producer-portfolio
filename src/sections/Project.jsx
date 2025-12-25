import React, { useEffect, useMemo, useRef, useState } from 'react';
import TRAP from "../assets/TRAP.jpg"
import UKDRILL from "../assets/UKDRILL.jpg"
import { useMotionValueEvent, useScroll } from 'framer-motion';


const Project = () => {

    const useIsMobile = (query = "(max-width:639px)") => {
        const [isMobile, setIsMobile] = useState(
            typeof window !== "undefined" && window.matchMedia(query).matches
        )

        useEffect(() => {
            if (typeof window === "undefined") return

            const mql = window.matchMedia(query)

            const handler = (e) => setIsMobile(e.matches)

            mql.addEventListener('change', handler)
            setIsMobile(mql.matches)

            return () => mql.removeEventListener("change", handler)

        }, [query])

        return isMobile
    }

    const isMobile = useIsMobile()
    const sceneRef = useRef(null)
    const projects = useMemo(() => [
        {
            title: "Trap Beat",
            link: "",
            bgColor: "red",
            image: isMobile ? TRAP : TRAP
        },
        {
            title: "Drill",
            link: "",
            bgColor: "purple",
            image: isMobile ? UKDRILL : UKDRILL
        },
    ], [isMobile])

    const { scrollYProgress } = useScroll({
        target: sceneRef,
        offset: ["start start", "end end"]
    })

    const threshold = projects.map((_, i) => (i + 1) / projects.length)

    const [activeIndex, setActiveIndex] = useState(0)

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const idx = threshold.findIndex((t) => v <= t)
    })

    return (
        <section ref={sceneRef} id='projects' className='relative text-white'>

        </section>
    );
};

export default Project;