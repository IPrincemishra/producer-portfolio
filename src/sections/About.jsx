import React from 'react';
import { motion } from 'framer-motion';
import AVATAR from "./../assets/avatar.jpg"

const About = () => {

    const stats = [
        {
            label: "Experience",
            value: "1+ Year"
        },
        {
            label: "Speciality",
            value: "Full Stack"
        },
        {
            label: "Focus",
            value: "Frontend and Backend"
        },
    ]

    return (
        <div className='relative'>
            <div className='absolute inset-0'>
                <div className='absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] rounded-full bg-linear-to-r from-[#302b63]/60 via-[#00bf8f]/60 to-[#1cd8d2]/60 opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse' />
                <div className='absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] rounded-full bg-linear-to-r from-[#302b63]/60 via-[#00bf8f]/60 to-[#1cd8d2]/60 opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500' />
            </div>
            <section className='w-full min-h-screen flex items-center justify-center relative  text-white overflow-hidden'>
                <div className='relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12'>
                    <motion.div
                        className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <motion.div className='relative w-40 h-40 md:w-44 md:h-44 overflow-hidden rounded-2xl  shadow-2xl bg-linear-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/45'
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 18 }}>
                            <img src={AVATAR} alt="Profile" className='absolute inset-0' />
                        </motion.div>
                        <div className='flex-1 flex flex-col justify-center text-center md:text-left '>
                            <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#02a17a] to-[#1cd8d2]'>
                                Prince Mishra
                            </h2>
                            <p className='mt-2 text-lg text-white/80 font-semibold'>Beat Producer</p>
                            <p className='mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, consequuntur, sint voluptate sapiente fugit aut repellendus, id quam eligendi minima omnis dignissimos? Libero voluptates dolorem iure necessitatibus tenetur rem perferendis.</p>
                            <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2  sm:gap-5 max-w-xl'>
                                {
                                    stats.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className='rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center'
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 9 }}
                                            transition={{ delay: 0.05 * i, duration: 0.4 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            <div className='text-sm  text-gray-400'>
                                                {item.label}
                                            </div>
                                            <div className='text-base  font-semibold'>
                                                {item.value}
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </div>
                            <div className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start'>
                                <a href="#project" className='inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition duration-300'>View Project</a>
                                <a href="#contact" className='inline-flex items-center justify-center rounded-lg border border-white/20 text-white font-semibold px-5 py-3 hover:bg-white/20 transition duration-300'>Get in Touch</a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className='text-center md:text-left'
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <h3 className='text-2xl sm:text-3xl font-bold text-white mb-3'>About Me</h3>
                        <p className='text-gray-300 leading-relaxed text-base sm:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolorem itaque veniam consequatur praesentium minus dolor, culpa provident, natus dicta neque laborum facere tenetur assumenda quam quo enim laudantium! Officia.</p>
                    </motion.div>

                </div>
            </section>

        </div>
    );
};

export default About;