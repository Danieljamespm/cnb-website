import React from 'react'

const Story = () => {
    return (
        <div className='h-[800px] text-white font-slabo flex items-center flex-col bg-amber-700 '>
            <h1 className='text-7xl pt-10 pb-20 text-gold'>Our Story</h1>
            <div className='bg-black flex justify-around items-center flex-col md:flex-row'>
                <p className='md:w-[30%] text-gold text-5xl bg-amber-900 w-[90%] pb-10'> THE COCK N' BULL WAS BORN OUT OF OUR LOVE FOR LOCAL MUSIC AND CRAFT BEER.</p>
                <img className='w-[90%]' src="images/front.jpg" alt="Front of Cocknbull" />
            </div>
            <div className='bg-amber-950 flex justify-around items-center pt-20 flex-col md:flex-row'>
                <img className='w-[90%]' src="images/mic.jpg" alt="Front of Cocknbull" />
                <div className='w-[90%] flex flex-col items-center pt-10'>
                    <p className='w-[90%] text-gold text-lg font-bold'> Our reputation as the area’s premier venue to enjoy and support the talented local music scene is the result of our commitment to provide only the very best in live entertainment. On Friday’s, we get your weekend started early by featuring legendary acoustic duo John Barile and Bobby May from 6-9:00, followed each week by a full band to rock the party until close.</p>
                    <p className='w-[90%] text-gold text-lg font-bold pt-8'>Both well known, and emerging local rock bands perform every Saturday night as well, and our goal is to ensure the highest level of musical talent available. Tuesday, Wednesday and Thursday nights are reserved for acoustic music, and we believe the level of talent that we bring to our stage is unequaled.</p>
                </div>
            </div>
        </div>
    )
}

export default Story