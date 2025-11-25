import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen w-full bg-[url(/images/beer_handles.jpg)] bg-cover bg-center flex justify-center items-center flex-col '>
            <div className="h-screen absolute inset-0 bg-black/40"></div>

            <h1 className='text-gold z-10 font-slabo text-4xl lg:text-8xl'>YE OLDE COCK' N BULL</h1>
            <p className='text-white font-slabo text-2xl lg:text-4xl z-10 pt-6'>Live Music, Local Vibes</p>
            <div className='border-amber-400 w-[50%] border-b-4 pt-4'></div>

        </div>
    )
}

export default Hero