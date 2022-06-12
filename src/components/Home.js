import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import pose from '../img/pose3.png'
import pose2 from '../img/pose2.jpg'
import logo2 from '../img/logo2.jpg'
import logo3 from '../img/logo3.png'

import Header from './Header';
import SubscribeForm from './SubscribeForm';
import OfferCard from './OfferCard';


const blackBoxVariants = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
            // when: "beforeChildren",
            // staggerChildren: 0.4
        }
    }
}

const yellowBoxVariants = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5,
            ease: "easeInOut"
        }
    }
}

const boxClass = 'flex flex-col justify-center text-center h-48 w-48 px-10 md:w-96 md:h-96 md:max-h-7xl md:max-w-7xl'

const Home = () => {
    return ( 
        <>
            <Header / >
            <main className='flex-grow overflow-y-auto items-center'>
                {/* pre about us */}
                <section className="home-page mx-20 my-0 px-10 md:flex justify-center" >
                    <motion.div className={ boxClass + ' bg-zinc-800 text-white'} variants = { blackBoxVariants }
                        initial = "hidden"
                        animate = "visible"
                    >
                        <img src="#" alt="logo" />
                        <h2 className='uppercase font-bold text-2xl my-3' >progression</h2>
                        <p className='font-extralight text-sm text-gray-200' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?
                        </p>
                    </motion.div>
                    <motion.div className={boxClass + ' bg-yellow-500 text-black'} variants = { yellowBoxVariants }
                        initial = "hidden"
                        animate = "visible"
                    >
                        <img src="#" alt="logo" />
                        <h2 className='uppercase font-bold text-2xl my-3' >Workout</h2>
                        <p className='font-extralight text-sm text-black' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?
                        </p>
                    </motion.div>
                </section>
                {/* about us */}
                <section className='flex justify-center space-x-10 items-center  h-max'>
                    <div className='max-w-lg'>
                        <p className='uppercase text-gray-600 text-sm font-bold'>about us</p>
                        <p className='capitalize font-extrabold text-black text-5xl'>Who are we</p>
                        <hr className='border border-y-2 border-yellow-500 w-40 mb-3'/>
                        <p className='font-light text-md text-gray-400 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>
                        <div>
                            <div className='flex justify-center items-center'>
                                <img src={logo3} alt="icon" className='w-36' />
                                <div>
                                    <p className='font-bold'>Fiteness Exercise</p>
                                    <p className='text-gray-400 text-sm my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={logo3} alt="icon" className='w-36' />
                                <div>
                                    <p className='font-bold'>Fiteness Exercise</p>
                                    <p className='text-gray-400 text-sm my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-96 min-h-max'>
                        <img src={pose} alt="pose" className='w-full h-full' />
                    </div>
                </section>
                <section className='flex flex-col items-center justify-center text-center bg-zinc-900 w-full h-hero-img py-16'>
                    <p className='capitalize text-white font-bold text-5xl'>what we offer</p>
                    <hr className='border-2 border-yellow-500 w-32'/>
                    <p className='text-white font-light text-sm max-w-xl my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis</p>
                    <div className='flex space-x-7'>
                        <OfferCard />
                        <OfferCard / >
                        <OfferCard / >
                        <OfferCard / >
                    </div>
                    <div className='flex w-44 h-10 items-center justify-center space-x-3'>
                        <motion.span className=' w-7 bg-yellow-500 h-1'
                            // animate={{x: 40}}
                        ></motion.span>
                        <motion.span className='w-7 bg-gray-500 h-1'
                            // animate={{ x: 0 }}
                        ></motion.span>
                        <motion.span className='w-7 
                        bg-gray-500 h-1'
                            // animate={{ x: -40 }}
                        ></motion.span>
                    </div>
                </section>
                <section className='flex flex-col relative w-full'>
                    <motion.div className=' flex bg-yellow-500 w-95p items-center absolute -top-24 right-0 overflow-hidden'
                        initial={{x: 800}}
                        animate={{x: 0}}
                        transition={{ type: "spring", stiffness: 100, duration: 0.1 }}
                    >
                        <img src={ pose2 } alt="imge" />
                        <div className='flex flex-col ml-16 justify-start items-start text-white'>
                            <p className='uppercase font-bold text-4xl'>Title here</p>
                            <hr className='w-28 border-2' />
                            <p className='text-sm max-w-xl my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis</p>
                            <Link to="#" className='uppercase text-white border border-white p-3 text-xs hover:border-none hover:text-black hover:bg-white'>join us now</Link>
                        </div>
                    </motion.div>
                </section>
                <section className='flex items-center justify-center space-x-10 text-left w-full h-hero-img py-16'>
                    <div className='w-96 h-60'>  
                        <p className='uppercase text-gray-600 text-sm font-bold'>testimonial</p>  
                        <p className='capitalize font-bold text-5xl'>Reviews from you</p>
                        <hr className='border-2 border-yellow-500 w-32 mb-5' />
                        {/* reviews */}
                        <div className=" flex flex-col py-3 bg-bottom relative">
                            <p className='capitalize text-gray-400 text-sm'>nutritionist</p>
                            <p className='uppercase font-bold'>chikaima obidiugwu</p>
                            <div className='stars'>
                                <i class="fa fa-star fa-sm text-yellow-400" aria-hidden="true"></i>
                                <i class="fa fa-star fa-sm text-yellow-400" aria-hidden="true"></i>
                                <i class="fa fa-star fa-sm text-yellow-400" aria-hidden="true"></i>
                                <i class="fa fa-star fa-sm text-yellow-400" aria-hidden="true"></i>
                                <i class="fa fa-star fa-sm text-yellow-400" aria-hidden="true"></i>
                            </div>

                            <p className='text-gray-500 text-sm'>"Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt"</p>
                            <i class="fa fa-quote-right absolute -bottom-2 -right-5 fa-8x opacity-10 -z-10" aria-hidden="true"></i>
                        </div>
                    </div>
                    
                    <div className='bg-gray-400 w-96 h-96'>
                        
                    </div>
                </section>

                <SubscribeForm / >
            </main>
        </>
    );
}

export default Home;