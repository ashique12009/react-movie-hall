import React from 'react'
import Logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='main lg:flex md:flex flex-wrap justify-between items-center px-4 py-4 bg-[#3e2b57]'>
        <div className='left flex items-center space-x-3'>
            <img src={Logo} alt="logo" />
            <h2 className='text-white text-2xl font-bold'>MovieHall</h2>
        </div>
        <div className='right'>
            <ul className='flex space-x-4 text-white'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
                <li className='cursor-pointer'>Services</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar