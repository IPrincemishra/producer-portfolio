import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaGitAlt, FaGithub, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman, SiRedux, SiTailwindcss } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skill = () => {

    const skills = [

        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaReact />,
            name: "React.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS"
        },
        {
            icon: <FaGitAlt />,
            name: "Git"
        },
        {
            icon: <FaGithub />,
            name: "GitHub"
        },
        {
            icon: <VscCode />,
            name: "VS Code"
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js "
        },
        {
            icon: <SiExpress />,
            name: "Express.js "
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB "
        },
        {
            icon: <SiRedux />,
            name: "Redux"
        },
        {
            icon: <SiPostman />,
            name: "Postman"
        },
    ]

    const repeated = [...skills, ...skills]

    const [dir, setDir] = useState(-1)
    const [active, setActive] = useState(false)
    const sectionRef = useRef(null)
    const trackRef = useRef(null)
    const touchY = useRef(null)
    const x = useMotionValue(0)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return

        const io = new IntersectionObserver(([entry]) => {
            setActive(entry.isIntersecting && entry.intersectionRatio > 0.1)
        },
            { threshold: [0.1] }
        )

        io.observe(el)

        return () => io.disconnect()

    }, [])


    useEffect(() => {
        if (!active) return
        const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1)
        const onTouchStart = (e) => (touchY.current = e.touches[0].clientY)
        const onTouchMove = (e) => {
            if (touchY.current == null) return
            const delta = e.touches[0].clientY - touchY.current
            setDir(delta > 0 ? 1 : -1)
            touchY.current = e.touches[0].clientY
        }

        window.addEventListener('wheel', onWheel, { passive: true })
        window.addEventListener('touchstart', onTouchStart, { passive: true })
        window.addEventListener('touchmove', onTouchMove, { passive: true })

        return () => {
            window.removeEventListener('wheel', onWheel)
            window.removeEventListener('touchstart', onTouchStart)
            window.removeEventListener('touchmove', onTouchMove)
        }

    }, [active])

    useEffect(() => {
        let id;
        let last = performance.now()
        const SPEED = 80

        const tick = (now) => {
            const dt = (now - last) / 1000
            last = now;

            let next = x.get() + SPEED * dir * dt
            let loop = trackRef.current?.scrollWidth / 2 || 0

            if (loop) {
                if (next <= -loop) next += loop
                if (next >= 0) next -= loop
            }
            x.set(next)
            id = requestAnimationFrame(tick)
        }

        id = requestAnimationFrame(tick)

        return () => cancelAnimationFrame(id)

    }, [dir, x])


    return (
        <section ref={sectionRef} id='skills' className='h-1/2 pt-8 pb-10 w-full flex flex-col items-center justify-center relative bg-black/20 text-white overflow-hidden'>

            <motion.h2
                className='text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z=10'
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
            >My Skills</motion.h2>
            <motion.p
                className='mt-2 mb-8 text-white/90 text-base sm:text-lg z-10'
                initial={{ opacity: 0, y: -10 }}
                viewport={{ once: true, amount: 0.4 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >Modern Website | SPA (Single Page Application)</motion.p>
            <div className='relative w-full overflow-hidden'>
                <motion.div ref={trackRef}
                    className='flex gap-20 text-6xl text-[#1cd8d2]'
                    style={{ x, whiteSpace: "nowrap", willChange: "transform" }}
                >
                    {
                        repeated.map((s, i) => (
                            <div key={i} className='flex flex-col items-center gap-2 min-w=[120px]' aria-label={s.name} title={s.name}>
                                <span className='hover:scale-125 transition-transform duration-300'>
                                    {s.icon}
                                </span>
                                <p className='text-sm'>{s.name}</p>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    );
};

export default Skill;