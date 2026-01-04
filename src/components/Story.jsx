import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
}

const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
}

const Story = () => {

    const isMobile = window.innerWidth < 768;

    const { scrollY } = useScroll();
    const ySlow = useTransform(scrollY, [0, 800], [0, -100]);
    const yFast = useTransform(scrollY, [0, 800], [0, -200]);

    return (
        <div id='story' className='h-[800px] font-slabo flex items-center flex-col bg-black '>
            <h1 className='text-6xl md:text-7xl pt-10 text-gold pb-4'>OUR STORY</h1>
            <div className='border-amber-400 w-[50%] border-b-4 mb-20'></div>
            <div className='bg-black flex justify-around items-center flex-col md:flex-row md:mr-10 md:ml-10'>
                <motion.p
                    className='md:w-[30%] text-gold text-3xl md:text-5xl text-center bg-black w-[90%] pb-10'
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    THE COCK N' BULL WAS BORN OUT OF OUR LOVE FOR LOCAL MUSIC AND CRAFT BEER.
                </motion.p>

                <motion.img
                    className='w-[90%] md:w-[50%]'
                    src="images/front.jpg"
                    alt="Front of Cocknbull"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                />
            </div>
            <div className='bg-black flex justify-around items-center pt-20 flex-col md:flex-row md:m-10'>
                <motion.img
                    className='w-[90%] md:w-[50%]'
                    src="images/mic.jpg"
                    alt="Microphone"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideLeft}
                />
                <div className='w-[90%] flex flex-col items-center pt-10'>
                    <motion.p
                        className='w-[90%] text-gold text-lg md:text-2xl font-bold'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideRight}
                    >
                        Our reputation as the area’s premier venue to enjoy and support the talented local music scene is the result of our commitment to provide only the very best in live entertainment. On Friday’s, we get your weekend started early by featuring legendary acoustic duo John Barile and Bobby May from 6-9:00, followed each week by a full band to rock the party until close.</motion.p>
                    <motion.p
                        className='w-[90%] text-gold text-lg md:text-2xl font-bold pt-8'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideRight}
                    >
                        Both well known, and emerging local rock bands perform every Saturday night as well, and our goal is to ensure the highest level of musical talent available. Tuesday, Wednesday and Thursday nights are reserved for acoustic music, and we believe the level of talent that we bring to our stage is unequaled.</motion.p>
                </div>
            </div>
        </div>
    )
}

export default Story