import { motion } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa6';
import { FiTwitter, FiYoutube } from 'react-icons/fi';
import AVATAR from './../assets/avatar.jpg'
import ParticlesBG from '../components/ParticlesBG';

const socials = [
    { Icon: <FiTwitter />, label: "X", href: "#" },
    { Icon: <FaTelegram />, label: "Telegram", href: "#" },
    { Icon: <FaGithub />, label: "Github", href: "https://github.com/IPrincemishra" },
]

const glowVariants = {
    initial: {
        scale: 1,
        y: 0,
        filter: "drop-shadow(0 0 0 rgba(0,0,0,0))"
    },
    hover: {
        scale: 1.2,
        y: -3,
        filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
        transition: {
            type: "spring",
            stiffness: 300,
            dampling: 15
        }
    },
    tap: {
        scale: 0.95,
        y: 0,
        transition: {
            duration: 0.08
        }
    }
}


const Home = () => {

    const roles = useMemo(() => ["Trap Beat Producer", "Drill Beat Producer", "Remix Producer", "Hip Hop Beat Producer"], [])

    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)


    useEffect(() => {
        const current = roles[index]
        const timeOut = setTimeout(() => {
            if (!deleting && subIndex < current.length) setSubIndex(v => v + 1)
            else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200)
            else if (deleting && subIndex > 0) setSubIndex(v => v - 1)
            else if (deleting && subIndex === 0) { setDeleting(false); setIndex(p => (p + 1) % roles.length) }
        }, deleting ? 40 : 60)


        return () => clearTimeout(timeOut)

    }, [subIndex, deleting, index, roles])


    return (
        <section id='home' className='w-full h-screen relative '>
            <ParticlesBG />
            <div className='absolute inset-0'>
                <div className='absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse' />
                <div className='absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500' />
            </div>

            <div className='relative z-10 h-full w-full max-w-7xl mx-auto px-4  grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex flex-col justify-center h-full text-center lg:text-left relative'>
                    <div className='w-full lg:pr-24 mx-auto max-w-3xl'>
                        <motion.div className='mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6rem]'
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span>{roles[index].substring(0, subIndex)}|</span>
                        </motion.div>
                        <motion.h1
                            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg'
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Hello I'm
                            <span className='block text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                                Beat Producer
                            </span>
                        </motion.h1>
                        <motion.p
                            className='mt-4 text-base sm:text-sm md:text-lg'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            I try to make beat from scratch using one shot sample and sometimes i use catchy loop to flip that sample and turn into a banger beat.
                        </motion.p>
                        <motion.div
                            className='mt-10 flex items-center justify-center lg:justify-start flex-wrap gap-5'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <a href="#projects" className='px-6 py-3 rounded-full bg-linear-to-r font-medium text-white text-lg  from-[#103d3c] via-[#003629] to-[#17143a] transition duration-300 hover:scale-105'>View My Work</a>

                            <a href="https://www.youtube.com/@iprincemishra" target="_blank" className='flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r font-medium text-white text-lg border hover:bg-red-600 hover:border-amber-50/0 transition duration-300 hover:scale-105'><FiYoutube className='flex' /> Youtube</a>
                        </motion.div>
                        <div className='mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start'>
                            {
                                socials.map(({ Icon, label, href }) => (
                                    <motion.a href={href} key={label} target='_blank' aria-label={label} rel='noopener noreferrer'
                                        variants={glowVariants}
                                        initial="initial" whileTap='tap' whileHover='hover' className='text-gray-300'
                                    > {Icon}</motion.a>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className='relative hidden lg:flex items-center justify-center'>
                    <motion.img
                        src={AVATAR}
                        alt="Badnaam"
                        className='object-contain select-none pointer-events-none rounded-full'
                        style={{ width: "min(25vw,450px)" }}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    />
                </div>


            </div>
        </section >
    );
};

export default Home;