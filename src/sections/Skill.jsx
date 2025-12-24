import { motion } from 'framer-motion';
import { FaCss3Alt, FaGitAlt, FaGithub, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa6';
import { SiExpress, SiMongodb, SiPostman, SiRedux, SiTailwindcss } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skill = () => {

    const skills = [

        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaHtml5 />,
            name: "HTML5"
        },
        {
            icon: <FaCss3Alt />,
            name: "CSS3"
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
            name: "Redux (Learning)"
        },
        {
            icon: <SiPostman />,
            name: "Postman"
        },
    ]

    const repeated = [...skills, ...skills]




    return (
        <section id='skills ' className='h-1/2 pb-8 w-full flex flex-col items-center justify-center relative bg-black text-white overflow-hidden'>

            <motion.h2
                className='text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z=10'
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >My Skills</motion.h2>
            <motion.p
                className='mt-2 mb-8 text-white/90 text-base sm:text-lg z-10'
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >Modern Website | SPA (Single Page Application)</motion.p>
            <div className='relative w-full overflow-hidden'>
                <motion.div
                    className='flex gap-10 text-6xl text-[#1cd8d2]'
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