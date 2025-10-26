import React from 'react'

const Nav = () => {
    return (
        <nav className='h-35 text-white border-b-amber-400 border-b-2'>
            <ul className='flex justify-around  bg-black h-full items-center font-slabo font-bold text-gold  '>
                <li>Home</li>
                <li>Menu</li>
                <li>History</li>
                <li>Entertainment</li>
                <li>Contact Us</li>
                <li>Beer List</li>
                <li>Employment Application</li>
            </ul>

        </nav>
    )
}

export default Nav