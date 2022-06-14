import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import images from '../images';


const Header = () => {
    const [image, setImage] = useState(images[0]);
    // const [join, setJoin] = useState('');

    var i = 1;
    useEffect(() => {
        const interval = setInterval(() => {
            if (i === images.length) {
                i = 0;
            }
            setImage(images[i++])
        }, 5000);
        return () => clearInterval(interval);
    }, [i]);

    return (
        <>
            <motion.div className="flex w-full h-max md:h-96 relative mt-12 bg-no-repeat bg-cover bg-center bg-origin-border bg-gradient-to-r from-cyan-500 to-blue-500" style={{backgroundImage: `url(${image})` }}>
                {/* <img src={image} alt="images" className='min-w-full h-96 md:h-full'/> */}
                <div className='flex flex-col bg-black bg-opacity-60 md:absolute top-0 left-0 py-28 px-24 w-full h-full text-left items-start justify-center' >
                    <h1 className=' text-white font-bold text-5xl' >Become Your Best</h1>
                    <p className='text-white text-sm mt-3 mb-7' >Lorem ipsum dolor sit amet consectetur adipisicing elit. A, error asperiores! Maxime, aliquid ipsum hic accusamus alias expedita illum in?</p>
                    <Link to="#" className='uppercase text-white border border-white p-3 text-xs hover:border-none hover:text-black hover:bg-white'>join us now</Link>
                </div>
            </motion.div>
        </>
    );
}
 
export default Header;