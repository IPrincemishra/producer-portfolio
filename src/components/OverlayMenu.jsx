import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { FiX } from 'react-icons/fi';

const OverlayMenu = ({ isOpen, onClose }) => {


    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024
    const origin = isMobile ? "95% 0%" : "50% 5%";


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ clipPath: `circle(0% at ${origin})` }}
                    animate={{ clipPath: `circle(150% at ${origin})` }}
                    exit={{ clipPath: `circle(0% at ${origin})` }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0, 0.2] }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
                >

                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-white text-3xl hover:text-purple-500"
                        aria-label="Close Menu"
                    >
                        <FiX />
                    </button>


                    <ul className="space-y-6 text-center">
                        {[
                            "Home",
                            "About",
                            "Skills",
                            "Projects",
                            "Experience",
                            "Testimonials",
                            "Contact"
                        ].map((item, index) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={onClose}
                                    className="text-4xl font-semibold text-white hover:text-purple-500 transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OverlayMenu;
