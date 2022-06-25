import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
    boxVariants,
    blackBoxVariants,
    yellowBoxVariants,
    titleHereVariants,
    whoWeAreBoxVariants,
    whoWeAreItems,
    whoWeAreItemsText,
    whoWeAreItemsImg,
    whatWeOfferVariants,
    // whatWeOfferLineVariants,
    whatWeOfferItemsVariants,
    whatWeOfferCardBoxVariants,
    whatWeOfferCardVariants
} from './animations';

import pose from '../images/pose3.png'
import pose2 from '../images/pose2.jpg'
import logo2 from '../images/logo2.jpg'
import logo3 from '../images/logo3.png'

import Header from './Header';
import OfferCard from './OfferCard';


const boxClass = 'flex flex-col justify-center text-center px-10 w-96 h-96 overflow-hidden md:max-h-7xl md:max-w-7xl'

const Home = () => {

    const titleHereAnimation = useAnimation();
    const whoWeAreAnimation = useAnimation();
    const whatWeOfferAnimation = useAnimation();

    const [ref, inView] = useInView({ threshold: 0.2 });
    const [ref2, inView2] = useInView({ threshold: 0.2  });
    const [ref3, inView3] = useInView({ threshold: 0.2  });

    const reviews = [
        {
            name: "Mary King",
            title: "nutritionist",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?",
            stars: 3 
        },
        {
            name: "Sarah Sam",
            title: "Programmer",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?",
            stars: 5 
        },
        {
            name: "Bill Dane",
            title: "Archaeologist",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus",
            stars: 3
        },
        {
            name: "Francisca George",
            title: "Business woman",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            stars: 4
        },
        {
            name: "chikaima obidiugwu",
            title: "nutritionist",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt",
            stars: 5
        },
    ]
    
    const [reviewCard, setReviewCard] = useState(reviews[0]);
    const index = useRef(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index.current === reviews.length){
                index.current = 0;
            } else {
                setReviewCard(false);
                setTimeout(() => {
                    setReviewCard(reviews[index.current++]);
                }, 1500)
            }
        }, 7000);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        if (inView){
            titleHereAnimation.start("visible");
        }
        if (inView2) {
            whoWeAreAnimation.start("visible")
        }
        if (inView3) {
            whatWeOfferAnimation.start("visible")
        }
    }, [titleHereAnimation, whoWeAreAnimation, whatWeOfferAnimation, inView, inView2, inView3]);

    return ( 
        <>
            <Header / >
            <motion.main className='flex-grow overflow-y-auto overflow-x-hidden items-center'>
                {/* pre about us */}
                <motion.section className="flex flex-col my-0 justify-center items-center md:flex-row md:px-16 md:home-page"
                    variants={boxVariants}
                    initial="hidden"
                    animate="visible"
                 >
                    <motion.div className={ boxClass + ' bg-zinc-800 text-white'} variants = { blackBoxVariants }
                    >
                        <img src="#" alt="logo" />
                        <h2 className='uppercase font-bold text-2xl my-3' >progression</h2>
                        <p className='font-extralight text-sm text-gray-200' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?
                        </p>
                    </motion.div>
                    <motion.div className={boxClass + ' bg-yellow-500 text-black'} variants = { yellowBoxVariants }
                    >
                        <img src="#" alt="logo" />
                        <h2 className='uppercase font-bold text-2xl my-3' >Workout</h2>
                        <p className='font-extralight text-sm text-black' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?
                        </p>
                    </motion.div>
                </motion.section>
                {/* about us */}
                <section className='flex flex-col md:flex-row justify-center space-x-10 items-center mt-16 px-16 mx-auto'
                    ref={ref2}
                >
                    <motion.div className='max-w-lg'
                        variants={whoWeAreBoxVariants}
                        initial="hidden"
                        animate={whoWeAreAnimation}
                    >
                        <motion.p className='uppercase text-gray-600 text-sm font-bold'
                            variants={whoWeAreItems}
                        >about us</motion.p>
                        <motion.p className='capitalize font-extrabold text-black text-5xl'
                            variants={whoWeAreItems}
                        >Who are we</motion.p>
                        <motion.hr className='border border-y-2 border-yellow-500 w-40 mb-3'
                            variants={whoWeAreItems}
                        />
                        <motion.p className='font-light text-md text-gray-400 mb-6'
                            variants={whoWeAreItemsText}
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </motion.p>
                        <motion.div
                            variants={whoWeAreItemsText}
                        >
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
                        </motion.div>
                    </motion.div>
                    <motion.div className='hidden md:block md:w-max min-h-max'
                        variants={whoWeAreItemsImg}
                        initial="hidden"
                        animate="visible"
                    >
                        <img src={pose} alt="pose" className='max-w-96 max-h-96' />
                    </motion.div>
                </section>
                <motion.section className='flex flex-col items-center text-center bg-zinc-900 w-full h-max p-16' 
                    ref={ref3}
                    variants={whatWeOfferVariants}
                    initial="hidden"
                    animate={whatWeOfferAnimation}
                >
                    <motion.p className='capitalize text-white font-bold text-5xl'
                        variants={whatWeOfferItemsVariants}
                    >what we offer</motion.p>
                    <motion.hr className='border-2 border-yellow-500 w-32 mb-3'
                        variants={whatWeOfferItemsVariants}
                    />
                    {/* <svg xmlns='http://www.w3.org/2000/svg' width='451' height='437'>
                        <motion.path
                            d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 412 319 412 213.5 C 412 108 334 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 219.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 152.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 218.5 C 197 239 206 250.5 225.5 250.5 C 250.5 253 242 253 218.5"
                            fill="transparent"
                            strokeWidth="12"
                            stroke="rgba(255, 255, 255, 0.69)"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 4, yoyo: Infinity, ease: "easeInOut" }}
                        />
                    </svg> */}
                    <motion.p className='text-white font-light text-sm max-w-xl mb-5'
                        variants={whatWeOfferItemsVariants}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis</motion.p>
                    <motion.div className='flex flex-col gap-3 mb-5 overflow-hidden px-16 justify-center items-center md:grid md:grid-cols-3 md:w-max md:px-3 lg:grid-cols-4' 
                        variants={whatWeOfferCardBoxVariants}
                    >
                        <motion.div variants={whatWeOfferCardVariants}>
                            <OfferCard />
                        </motion.div>
                        <motion.div variants={whatWeOfferCardVariants}>
                            <OfferCard />
                        </motion.div>
                        <motion.div variants={whatWeOfferCardVariants}>
                            <OfferCard />
                        </motion.div>
                        <motion.div variants={whatWeOfferCardVariants}>
                            <OfferCard />
                        </motion.div>
                    </motion.div>
                    <div className='flex w-44 h-10 items-center justify-center space-x-3 mb-16'>
                        <motion.span className='w-7 bg-yellow-500 h-1'
                        ></motion.span>
                        <motion.span className='w-7 bg-gray-500 h-1'
                        ></motion.span>
                        <motion.span className='w-7 
                        bg-gray-500 h-1'
                        ></motion.span>
                    </div>
                </motion.section>
                <motion.section className='flex flex-col relative w-full'
                    ref={ref}
                >
                    <motion.div className='py-5 flex bg-yellow-500 w-95p items-center absolute -top-24 right-0 overflow-hidden md:py-0 shadow-2xl rounded-l-lg'
                        variants={titleHereVariants}
                        initial="hidden"
                        animate={titleHereAnimation}
                    >
                        <img src={ pose2 } alt="imge" className='hidden md:block' />
                        <div className='flex flex-col mx-8 md:ml-16 md:py-3 justify-start items-start text-white'>
                            <p className='uppercase font-bold text-lg md:text-4xl'>Title here</p>
                            <hr className='w-12 border md:w-28 md:border-2' />
                            <p className='text-xs max-w-xl my-3 md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis</p>
                            <motion.div whileDrag={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
                                <Link to="#" className='uppercase text-white border border-white p-2 text-xs rounded-lg hover:border-none hover:text-black hover:bg-white md:p-3'>join us now</Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.section>
                <section className='flex items-center justify-center space-x-10 text-left w-full h-max mb-16 py-16 pt-36 px-16 md:mb-0'>
                    <div className='w-96 h-60'>  
                        <p className='uppercase text-gray-600 text-sm font-bold'>testimonial</p>  
                        <p className='capitalize font-bold text-5xl'>Reviews from you</p>
                        <hr className='border-2 border-yellow-500 w-32 mb-5' />
                        {/* reviews */}
                        <AnimatePresence>
                            {reviewCard && (
                                <motion.div className=" flex flex-col py-3 bg-bottom relative"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    exit={{ opacity: 0, x: -100 }}
                                >
                                    <p className='capitalize text-gray-400 text-sm'>{reviewCard.title}</p>
                                    <p className='uppercase font-bold'>{reviewCard.name}</p>
                                    <div className='stars space-x-1 mb-5'>
                                        <i className="fa fa-star fa-sm text-yellow-400" aria-hidden="true"></i>
                                        <i className="fa fa-star fa-sm text-yellow-400" aria-hidden="true"></i>
                                        <i className="fa fa-star fa-sm text-yellow-400" aria-hidden="true"></i>
                                        <i className="fa fa-star fa-sm text-yellow-400" aria-hidden="true"></i>
                                        <i className="fa fa-star fa-sm text-yellow-400" aria-hidden="true"></i>
                                    </div>

                                    <p className='text-gray-500 text-sm'>{reviewCard.review}</p>
                                    <i className="fa fa-quote-right absolute -bottom-2 -right-5 fa-8x opacity-10 -z-10" aria-hidden="true"></i>
                                </motion.div>
                            )}
                        </AnimatePresence>
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
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SbCedTlJWTs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className='w-full h-96 md:mx-auto md:absolute md:top-20 lg:left-80 lg:w-8/12 lg:rounded-lg' allowFullScreen></iframe>

                    <div className='h-20 md:h-80 bg-white'>
                        
                    </div>
                </section>

                <section className='relative'>
                    <div className='h-20 md:h-60 bg-gray-200'>

                    </div>
                    <motion.div className='flex flex-col px-12 py-16 bg-yellow-500 text-white text-center gap-3 drop-shadow-2xl md:text-left md:rounded-2xl max-w-4xl mx-auto md:flex-row md:absolute md:top-28 left-7 lg:top-28 lg:left-1/4'
                        whileHover={{ scale: 1.1 }}
                        whileFocus={{ scale: 1.1 }}
                    >
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
                    </motion.div>
                    <div className='h-20 md:h-72 bg-white'>

                    </div>
                </section>

            </motion.main>
        </>
    );
}

export default Home;