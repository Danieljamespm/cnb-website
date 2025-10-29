import React from 'react'

const Hero = () => {
    return (
        <div className='h-[800px] bg-[url(/images/beer_tap.jpg)] bg-cover bg-center flex justify-center items-center flex-col '>
            <div className="absolute inset-0 bg-black/40"></div>

            <p className='text-gold z-10 font-slabo text-4xl lg:text-6xl'>YE OLDE COCK' N BULL</p>
        </div>
    )
}

export default Hero