import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import images from '../images';


const heroVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.4,
            delayChildren: 0.5
        }
    }
}
const titleVariants = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            y: {
                duration: 0.2,
                type: 'spring',
                stiffness: 100
            },
            opacity: {
                duration: 1,
            },
            ease: 'easeOut'
        }
    }
}
const bodyVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 1,
            ease: 'easeOut'
        }
    }
}
const btnVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 1.2,
            ease: 'easeOut'
        }
    }
}

const Header = () => {
    const [image, setImage] = useState(images[0]);
    const i = useRef(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (i.current === images.length) {
                i.current = 0;
            }
            setImage(images[i.current++])
        }, 5000);
        return () => clearInterval(interval);
    }, [i]);

    return (
        <>
            <motion.div className="flex w-full h-max md:h-96 relative mt-12 bg-no-repeat bg-cover bg-center bg-origin-border bg-gradient-to-r from-cyan-500 to-blue-500" style={{backgroundImage: `url(${image})` }}>
                {/* <img src={image} alt="images" className='min-w-full h-96 md:h-full'/> */}
                <motion.div className='flex flex-col bg-black bg-opacity-60 md:absolute top-0 left-0 py-28 px-24 w-full h-full text-left items-start justify-center' 
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 className='text-white font-bold text-5xl' 
                        variants={titleVariants}
                    >Become Your Best</motion.h1>
                    <motion.p className='text-white text-sm mt-3 mb-7' 
                        variants={bodyVariants}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. A, error asperiores! Maxime, aliquid ipsum hic accusamus alias expedita illum in?</motion.p>
                    <motion.div className='btn'
                        variants={btnVariants}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link to="#" className='uppercase text-white border border-white p-3 text-xs rounded-md hover:border-none hover:text-black hover:bg-white'>join us now</Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
}
 
export default Header;