import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../images/logo2.jpg'


const menuVariants = {
    hidden: {
        opacity: 0,
        y: -500,
        transition: {
            ease: 'easeOut',
            duration: 1
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
            type: 'spring',
            stiffness: 500,
            damping: 30,
            ease: 'easeOut'
        }
    }
}

const Navbar = () => {

    const [searchText, setSearchText] = useState("")
    const [animation, setAnimation] = useState(false);

    return (
        <nav className='relative' >
            <div className='fixed top-0 flex justify-between w-full bg-white text-black mx-auto my-0 py-3 px-10 z-20'>
                <div className="logo h-5 w-12">
                    <img src={ logo } alt="logo" />
                </div>
                <div className='flex flex-row-reverse'>
                    {/* on md screen */}
                    <div className='flex flex-row space-x-2 items-center'>
                        <ul className="hidden md:flex flex-row space-x-5 uppercase">
                            <motion.li whileHover={{ scale: 1.05 }} className='active hover:bg-yellow-500 hover:text-white w-full px-4 py-2 rounded-sm'>Home</motion.li>                
                            <motion.li whileHover={{ scale: 1.05 }} className='hover:bg-yellow-500 hover:text-white rounded-sm w-full px-4 py-2'>Services</motion.li>                
                            <motion.li whileHover={{ scale: 1.05 }} className='hover:bg-yellow-500 hover:text-white rounded-sm w-full px-4 py-2'>About</motion.li>                
                            <motion.li whileHover={{ scale: 1.05 }} className='hover:bg-yellow-500 hover:text-white rounded-sm w-full px-4 py-2'>Contact</motion.li>                
                        </ul>
                        <form className=''>
                            <input className='hidden bg-gray-200 rounded-full py-1 pl-5 lg:inline' type="search" name="search" value={ searchText } onChange={e => setSearchText(e.target.value)} placeholder="Search"/>
                            <i className='fa fa-search lg:ml-2 cursor-pointer'></i>                    
                        </form>
                    </div>
                    {/* on sm screen */}
                    <div className='flex flex-col space-y-1 cursor-pointer md:hidden' onClick={e => setAnimation(prevState => !prevState)}>
                        <span className='w-7 h-1 rounded-sm bg-yellow-500'></span>
                        <span className='w-7 h-1 rounded-sm bg-yellow-500'></span>
                        <span className='w-5 h-1 rounded-sm bg-yellow-500'></span>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                { animation && (
                    <motion.ul className={`fixed top-12 flex-col z-10 right-0 w-full space-y-3 uppercase items-center text-center bg-white shadow-lg md:hidden`}
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{
                            opacity: 0,
                            y: -200
                        }}
                    >
                        <li className='active hover:bg-yellow-500 hover:text-white w-full py-2'>Home</li>
                        <li className='hover:bg-yellow-500 hover:text-white w-full py-2'>Services</li>
                        <li className='hover:bg-yellow-500 hover:text-white w-full py-2'>About</li>
                        <li className='hover:bg-yellow-500 hover:text-white w-full py-2'>Contact</li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}
 
export default Navbar;