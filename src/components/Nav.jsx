import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Nav = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


    return (

        <nav className="fixed h-32 w-full z-40 bg-transparent text-white border-b-amber-400 border-b-2">
            <div className="flex items-center justify-between h-full px-8">
                {/* Logo */}
                <div className="relative">
                    <img src="/images/logo.png" alt="Logo" className="w-36 h-36 object-contain -mb-6 z-10" />
                </div>

                {/* Desktop menu */}
                <ul className="hidden lg:flex space-x-8 font-slabo font-bold text-gold text-xl">
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Home</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Menu</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">History</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Entertainment</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Contact Us</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Beer List</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Employment Application</a></li>
                </ul>

                {/* Mobile Hamburger */}
                <div onClick={handleNav} className="lg:hidden cursor-pointer text-gold">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
            </div>

            {/* Mobile menu items */}
            {nav && (
                <ul className="lg:hidden bg-black text-gold flex flex-col items-center space-y-4 py-4 font-slabo font-bold">
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Home</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Menu</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">History</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Entertainment</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Contact Us</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Beer List</a></li>
                    <li className="hover:text-white transition-colors duration-500 ease-in-out"><a href="#">Employment Application</a></li>
                </ul>
            )}
        </nav>



    )
}

export default Nav