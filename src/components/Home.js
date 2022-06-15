import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import pose from '../images/pose3.png'
import pose2 from '../images/pose2.jpg'
import logo2 from '../images/logo2.jpg'
import logo3 from '../images/logo3.png'

import Header from './Header';
// import SubscribeForm from './SubscribeForm';
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

const boxClass = 'flex flex-col justify-center text-center px-10 w-96 h-96 overflow-hidden md:max-h-7xl md:max-w-7xl'

const Home = () => {
    return ( 
        <>
            <Header / >
            <main className='flex-grow overflow-y-auto overflow-x-hidden items-center'>
                {/* pre about us */}
                <section className="flex flex-col my-0 justify-center items-center md:flex-row md:px-16 md:home-page" >
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
                <section className='flex flex-col md:flex-row justify-center space-x-10 items-center mt-16 px-16 mx-auto'>
                    <div className='max-w-lg'>
                        <p className='uppercase text-gray-600 text-sm font-bold'>about us</p>
                        <p className='capitalize font-extrabold text-black text-5xl'>Who are we</p>
                        <hr className='border border-y-2 border-yellow-500 w-40 mb-3'/>
                        <p className='font-light text-md text-gray-400 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>
                        <div>
                            <div className='flex justify-center items-center'>
                                <img src={logo3} alt="icon" className='w-36' />
                                <div>
                                    <p className='font-bold'>Fitness Exercise</p>
                                    <p className='text-gray-400 text-sm my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={logo3} alt="icon" className='w-36' />
                                <div>
                                    <p className='font-bold'>Fitness Exercise</p>
                                    <p className='text-gray-400 text-sm my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block md:w-max min-h-max'>
                        <img src={pose} alt="pose" className='max-w-96 max-h-96' />
                    </div>
                </section>
                <section className='flex flex-col items-center text-center bg-zinc-900 w-full h-max p-16'>
                    <p className='capitalize text-white font-bold text-5xl'>what we offer</p>
                    <hr className='border-2 border-yellow-500 w-32'/>
                    <p className='text-white font-light text-sm max-w-xl my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis</p>
                    <div className='flex flex-col gap-3 mb-5 overflow-hidden px-16 justify-center items-center md:grid md:grid-cols-3 md:w-max md:px-3 lg:grid-cols-4'>
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                    </div>
                    <div className='flex w-44 h-10 items-center justify-center space-x-3 mb-16'>
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
                    <motion.div className='py-5 flex bg-yellow-500 w-95p items-center absolute -top-24 right-0 overflow-hidden md:py-0'
                        initial={{x: 800}}
                        animate={{x: 0}}
                        transition={{ type: "spring", stiffness: 100, duration: 0.1 }}
                    >
                        <img src={ pose2 } alt="imge" className='hidden md:block' />
                        <div className='flex flex-col mx-8 md:ml-16 md:py-3 justify-start items-start text-white'>
                            <p className='uppercase font-bold text-lg md:text-4xl'>Title here</p>
                            <hr className='w-12 border md:w-28 md:border-2' />
                            <p className='text-xs max-w-xl my-3 md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis</p>
                            <Link to="#" className='uppercase text-white border border-white p-2 text-xs hover:border-none hover:text-black hover:bg-white md:p-3'>join us now</Link>
                        </div>
                    </motion.div>
                </section>
                <section className='flex items-center justify-center space-x-10 text-left w-full h-max mb-16 py-16 pt-36 px-16 md:mb-0'>
                    <div className='w-96 h-60'>  
                        <p className='uppercase text-gray-600 text-sm font-bold'>testimonial</p>  
                        <p className='capitalize font-bold text-5xl'>Reviews from you</p>
                        <hr className='border-2 border-yellow-500 w-32 mb-5' />
                        {/* reviews */}
                        <div className=" flex flex-col py-3 bg-bottom relative">
                            <p className='capitalize text-gray-400 text-sm'>nutritionist</p>
                            <p className='uppercase font-bold'>chikaima obidiugwu</p>
                            <div className='stars space-x-1 mb-10'>
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
                    
                    <div className='hidden md:w-96 md:h-96 md:grid grid-cols-2 grid-rows-2 items-center gap-2 grid-flow-row-dense'>
                        <img src={ pose } alt="photopic" className='w-full h-full' />
                        <img src={ pose2 } alt="photopic" className='w-full h-full' />
                        <img src={ logo2 } alt="photopic" className='w-full h-full' />
                        <img src={ logo3 } alt="photopic" className='w-full h-full' />
                    </div>
                </section>
                <section className='relative w-full h-max bg-gray-200'>
                    <div className='h-20 md:h-60 bg-black'>
                        
                    </div>
                    {/* video */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SbCedTlJWTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className='w-full h-96 md:mx-auto md:absolute md:top-20 lg:left-80 lg:w-8/12 lg:rounded-lg' allowfullscreen></iframe>

                    <div className='h-20 md:h-80 bg-white'>
                        
                    </div>
                </section>

                <section className='relative'>
                    <div className='h-20 md:h-60 bg-gray-200'>

                    </div>
                    <div className='flex flex-col px-12 py-16 bg-yellow-500 text-white text-center gap-3 md:text-left md:rounded-2xl max-w-4xl mx-auto md:flex-row md:absolute md:top-28 left-7 lg:top-28 lg:left-1/4'>
                        <div>
                            <p className='uppercase text-3xl font-bold md:text-4xl' >lets start!</p>
                            <p className='uppercase text-sm md:font-bold md:text-lg' >subscribe to our newsletter</p>
                            <p className='text-xs md:text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt</p>
                        </div>
                        <div>
                            <form className='flex flex-col space-y-3' >
                                <input type="text" placeholder='Name' className='p-2 text-gray-600' />
                                <input type="text" placeholder='Email' className='p-2 text-gray-600' />
                                <input type="submit" value="subscribe" className='uppercase text-sm bg-zinc-900 p-2 ' />
                            </form>
                        </div>
                    </div>
                    <div className='h-20 md:h-72 bg-white'>

                    </div>
                </section>

            </main>
        </>
    );
}

export default Home;