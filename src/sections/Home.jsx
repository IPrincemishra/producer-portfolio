import { motion } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react';

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
                        <p>
                            I turn complex ideas into seamless, high-impact web exper
                        </p>
                    </div>
                </div>



            </div>
        </section >
    );
};

export default Home;