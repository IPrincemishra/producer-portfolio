import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react';

const IntroAnimation = ({ onFinish }) => {
    const [index, setIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    const greetings = useMemo(() => [
        "Hello",              // English
        "नमस्ते",               // Hindi
        "Bonjour",            // French
        "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",        // Punjabi
        "নমস্কার",            // Bengali
        "வணக்கம்",          // Tamil
        "నమస్కారం",         // Telugu
        "नमस्कार",            // Marathi
        "નમસ્તે",             // Gujarati
        "ನಮಸ್ಕಾರ",             // Kannada
        "നമസ്കാരം",           // Malayalam
        "प्रणाम"                 // Maithili
    ], []);


    useEffect(() => {
        if (index < greetings.length - 1) {
            const id = setInterval(() => setIndex((i) => i + 1), 300)

            return () => clearInterval(id)
        } else {
            const t = setTimeout(() => setVisible(false), 1500)
            return () => clearTimeout(t)
        }
    }, [index, greetings.length])


    return (
        <AnimatePresence onExitComplete={onFinish}>
            {visible && (
                <motion.div
                    className='fixed inset-0 z-999 flex items-center justify-center bg-black text-white overflow-hidden'
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%", transition: {
                            duration: 1.05,
                            ease: [0.25, 1, 0.40, 1]
                        }
                    }}
                >
                    <motion.h1
                        key={index}
                        className='text-4xl md:text-5xl lg:text-6xl font-bold'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                    >
                        {greetings[index]}
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroAnimation;