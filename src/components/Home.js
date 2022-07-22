import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
    navbarMenuBtnVariants,
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

import logo from '../images/logo2.jpg'
import progress from '../images/timer_FILL0_wght400_GRAD0_opsz48.svg';
import workout from '../images/brawn-svgrepo-com.svg'

import pose from '../images/pose3.png'
import pose2 from '../images/pose2.jpg'
import logo2 from '../images/logo2.jpg'
import logo3 from '../images/logo3.png'

import Header from './Header';
import OfferCard from './OfferCard';
import Review from './Review';


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

const boxClass = 'flex flex-col justify-center text-center px-16 w-96 h-96 overflow-hidden md:max-h-7xl md:max-w-7xl shadow-2xl'

const Home = () => {
    // Navbar
    const [searchText, setSearchText] = useState("")
    const [searchBtnAction, setSearchBtnAction] = useState(false);
    const [animation, setAnimation] = useState(false);

    const titleHereAnimation = useAnimation();
    const whoWeAreAnimation = useAnimation();
    const whatWeOfferAnimation = useAnimation();

    const [ref, inView] = useInView({ threshold: 0.2 });
    const [ref2, inView2] = useInView({ threshold: 0.5 });
    const [ref3, inView3] = useInView({ threshold: 0.2 });

    const reviews = [
        {
            name: "Mary King",
            title: "nutritionist",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?",
            stars: 4
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

    let pageWidth = window.innerWidth;

    useEffect(() => {
        if (pageWidth > 770) {
            setSearchBtnAction(false);
            document.body.style.overflow = 'unset';
        }
    }, [pageWidth]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index.current === reviews.length) {
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
        if (inView) {
            titleHereAnimation.start("visible");
        }
        if (inView2) {
            whoWeAreAnimation.start("visible")
        }
        if (inView3) {
            whatWeOfferAnimation.start("visible")
        }
    }, [titleHereAnimation, whoWeAreAnimation, whatWeOfferAnimation, inView, inView2, inView3]);

    const handleSearchForm = (e) => {
        e.preventDefault();
    }

    const handleToggleSearchModal = (e) => {
        e.stopPropagation();

        if (searchBtnAction) {
            setSearchBtnAction(false)
            document.body.style.overflow = 'unset';
        } else {
            setSearchBtnAction(true);
            document.body.style.overflow = 'hidden';
        }
    }

    return (
        <>
            {/* Navbar */}
            <div className='navbar'>
                <nav className='relative' >
                    <div className='fixed top-0 flex justify-between w-full bg-white text-black mx-auto my-0 py-3 px-10 z-20 drop-shadow-md'>
                        <div className="logo h-5 w-12">
                            <img src={logo} alt="logo" />
                        </div>
                        {/* menu and search bar */}
                        <div className='flex'>
                            {/* on md screen */}
                            <div className='flex flex-row space-x-2 items-center'>
                                <ul className="hidden md:flex flex-row space-x-5 uppercase">
                                    <a href='#top'>
                                        <motion.li whileHover={{ scale: 1.05 }} className='active hover:bg-neonCarrot hover:text-white w-full px-4 py-2 rounded-sm'>Home</motion.li>
                                    </a>
                                    <a href="#services">
                                        <motion.li whileHover={{ scale: 1.05 }} className='hover:bg-neonCarrot hover:text-white rounded-sm w-full px-4 py-2'>Services</motion.li>
                                    </a>
                                    <a href="#about">
                                        <motion.li whileHover={{ scale: 1.05 }} className='hover:bg-neonCarrot hover:text-white rounded-sm w-full px-4 py-2'>About</motion.li>
                                    </a>
                                    <a href="#contact">
                                        <motion.li whileHover={{ scale: 1.05 }} className='hover:bg-neonCarrot hover:text-white rounded-sm w-full px-4 py-2'>Contact</motion.li>
                                    </a>
                                </ul>
                                <form>
                                    <div
                                        className={'search-input hidden bg-white p-1 rounded-bl-2xl md:inline'}
                                    >
                                        <input className='bg-gray-200 rounded-full py-1 pl-5 lg:inline' type="search" name="search" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search..." />
                                    </div>
                                    <i className={`fa fa-search mr-5 lg:ml-2 cursor-pointer md:hidden`} onClick={handleToggleSearchModal} ></i>
                                </form>
                            </div>
                            {/* on sm screen */}
                            <div className='flex flex-col space-y-1 cursor-pointer md:hidden' onClick={() => setAnimation(prevState => !prevState)}>
                                <motion.span className='w-7 h-1 rounded-sm bg-neonCarrot'
                                    variants={navbarMenuBtnVariants}
                                    animate={animation ? "visibleTop" : "hidden"}
                                ></motion.span>
                                <motion.span className='w-7 h-1 rounded-sm bg-neonCarrot'
                                    variants={navbarMenuBtnVariants}
                                    animate={animation ? "visibleMiddle" : "hidden"}
                                ></motion.span>
                                <motion.span className='w-5 h-1 rounded-sm bg-neonCarrot'
                                    variants={navbarMenuBtnVariants}
                                    animate={animation ? "visibleBottom" : "hidden"}
                                ></motion.span>
                            </div>
                            {/* search bar */}
                            {searchBtnAction && (
                                <div className='absolute top-0 left-0 bg-black bg-opacity-70  min-h-screen w-full z-10 flex flex-col justify-start pt-20' onClick={handleToggleSearchModal}>
                                    <form className="bg-white mx-auto my-5 z-30 p-5 w-72 rounded-md" onSubmit={handleSearchForm} onClick={(e) => e.stopPropagation()}>
                                        <p className='mb-3'>Find what you're looking for</p>
                                        <input type="text" placeholder="Search.." className='p-3 bg-gray-200 w-full rounded-sm' name="search" />
                                        <hr className='my-2 border-gray-400' />
                                        <button type="submit" className='bg-neonCarrot block w-full p-2 rounded-sm text-white hover:bg-yellow-600'>Search</button>
                                    </form>
                                    <button className='text-white z-20 hover:scale-110 p-4 w-20 mx-auto' onClick={handleToggleSearchModal}>&#x2716;</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <AnimatePresence>
                        {animation && (
                            <motion.ul className={`fixed top-12 flex-col z-10 right-0 w-full space-y-3 uppercase items-center text-center bg-white shadow-lg md:hidden`}
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{
                                    opacity: 0,
                                    y: -200
                                }}
                            >
                                <li className='active hover:bg-neonCarrot hover:text-white w-full py-2'>Home</li>
                                <li className='hover:bg-neonCarrot hover:text-white w-full py-2'>Services</li>
                                <li className='hover:bg-neonCarrot hover:text-white w-full py-2'>About</li>
                                <li className='hover:bg-neonCarrot hover:text-white w-full py-2'>Contact</li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
            {/* top */}
            <div id='top' className='md:h-4'></div>
            {/* header */}
            <Header />
            {/* main section */}
            <motion.main className='flex-grow overflow-y-auto overflow-x-hidden items-center'>
                {/* pre about us */}
                <motion.section className="flex flex-col my-0 justify-center items-center md:flex-row md:px-16 md:home-page"
                    variants={boxVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className={boxClass + ' bg-zinc-800 text-white md:rounded-bl-xl relative'} variants={blackBoxVariants}
                    >
                        <motion.svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className='fill-white mx-auto mb-3'><motion.path d="M18 5V2h12v3Zm4.5 22.35h3v-11.5h-3Zm1.5 16.6q-3.7 0-6.975-1.425Q13.75 41.1 11.3 38.65q-2.45-2.45-3.875-5.725Q6 29.65 6 25.95q0-3.7 1.425-6.975Q8.85 15.7 11.3 13.25q2.45-2.45 5.725-3.875Q20.3 7.95 24 7.95q3.35 0 6.3 1.125 2.95 1.125 5.25 3.125l2.55-2.55 2.1 2.1-2.55 2.55q1.8 2 3.075 4.85Q42 22 42 25.95q0 3.7-1.425 6.975Q39.15 36.2 36.7 38.65q-2.45 2.45-5.725 3.875Q27.7 43.95 24 43.95Zm0-3q6.25 0 10.625-4.375T39 25.95q0-6.25-4.375-10.625T24 10.95q-6.25 0-10.625 4.375T9 25.95q0 6.25 4.375 10.625T24 40.95ZM24 26Z"
                        /></motion.svg>
                        <img src={progress} alt="" className='w-44 absolute right-0 -bottom-2 opacity-25' />
                        <h2 className='uppercase font-bold text-2xl my-3 z-10' >progression</h2>
                        <p className='font-extralight text-sm text-gray-200 z-10' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?
                        </p>
                    </motion.div>
                    <motion.div className={boxClass + ' bg-neonCarrot text-black rounded-bl-xl md:rounded-bl-none rounded-br-xl relative'} variants={yellowBoxVariants}
                    >
                        {/* <img src="#" alt="logo" /> */}
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="48" width="48" className='mx-auto'
                            viewBox="0 0 481.688 481.688" xml="preserve">
                            <path d="M477.803,193.838l-66.081-98.23c-6.754-10.04-19.073-14.432-30.658-10.927l-22.729,6.878
	c-33.361-26.276-74.86-40.695-117.487-40.695c-42.627,0-84.128,14.42-117.49,40.697l-22.733-6.88
	C89.04,81.174,76.72,85.568,69.966,95.608l-66.083,98.23c-5.313,7.898-5.161,18.384,0.375,26.09
	c6.966,9.697,21.828,27.92,43.107,41.027c1.621,0.998,3.25,1.935,4.882,2.839c5.413,44.884,26.645,86.275,60.183,117.053
	c35.118,32.228,80.724,49.976,128.417,49.976c47.688,0,93.291-17.749,128.407-49.976c33.538-30.779,54.769-72.169,60.182-117.052
	c1.633-0.905,3.263-1.842,4.884-2.841c21.278-13.106,36.142-31.33,43.107-41.026C482.967,212.221,483.117,201.736,477.803,193.838z
	 M335.634,99.751c-1.661,1.715-2.7,4.004-2.813,6.501l-1.406,30.942c-0.191,4.208,2.274,8.084,6.166,9.694l20.394,8.438
	c3.479,1.441,7.474,0.803,10.331-1.648l16.532-14.17c5.294,9.148,7.899,20.701,10.438,31.958c0.383,1.698,0.762,3.379,1.147,5.044
	c-6.394-1.571-11.991-1.595-16.404-1.059c-8.551,1.039-16.809,4.637-23.823,10.298c-24.591-9.253-43.014-5.52-54.439-0.461
	c-6.43,2.847-11.353,6.377-14.833,9.415l-12.324-7.135c8.396-11.711,13.516-27.903,13.516-46.053
	c0-16.847-4.657-30.95-13.468-40.784c-8.42-9.398-20.424-14.573-33.803-14.573s-25.383,5.175-33.803,14.573
	c-8.811,9.834-13.468,23.938-13.468,40.784c0,18.149,5.12,34.342,13.516,46.053l-12.325,7.135c-3.48-3.038-8.403-6.568-14.833-9.415
	c-11.427-5.06-29.849-8.792-54.438,0.461c-7.016-5.662-15.273-9.259-23.823-10.298c-4.415-0.536-10.012-0.512-16.404,1.059
	c0.386-1.665,0.765-3.347,1.147-5.045c2.538-11.257,5.143-22.809,10.438-31.957l16.532,14.17c2.857,2.45,6.852,3.087,10.331,1.647
	l20.393-8.438c3.893-1.61,6.357-5.487,6.166-9.694l-1.406-30.942c-0.113-2.495-1.151-4.783-2.81-6.497
	c27.875-18.725,60.935-28.89,94.792-28.89C274.703,70.864,307.761,81.028,335.634,99.751z M213.574,141.515
	c0-22.14,10.194-35.357,27.271-35.357s27.27,13.218,27.27,35.357c0,24.502-12.488,45.203-27.27,45.203
	S213.574,166.017,213.574,141.515z M73.906,272.971c8.869,2.622,17.875,3.939,26.992,3.938c6.756,0,13.575-0.739,20.442-2.183
	c5.707,15.147,18.323,46.704,31.254,66.271c6.665,10.085,11.108,21.229,13.207,33.121c1.339,7.588,2.322,14.754,3.027,20.726
	c-15.524-7.265-29.989-16.907-42.874-28.731C98.85,341.239,80.73,308.628,73.906,272.971z M147.335,252.251l16.439,31.383
	c1.134,2.164,3.021,3.838,5.304,4.707c0.549,0.208,13.613,5.138,29.12,7.645c5.989,0.969,11.542,1.452,16.653,1.452
	c10.591,0,19.281-2.076,25.993-6.213c9.949,6.133,24.244,7.737,42.646,4.761c15.507-2.507,28.571-7.436,29.12-7.645
	c2.283-0.869,4.17-2.543,5.304-4.707l16.438-31.381c3.881,2.412,8.06,5.943,9.359,9.798c-3.654,10.026-17.665,47.283-31.303,67.918
	c-8.183,12.382-13.639,26.066-16.217,40.673c-2.354,13.334-3.655,25.247-4.304,32.365c-2.573,0.809-5.166,1.559-7.778,2.245
	l8.562-50.899c1.606-9.546-2.077-19.251-9.612-25.329l-21.525-17.359c-11.988-9.668-29.393-9.67-41.379,0l-21.526,17.359
	c-7.535,6.078-11.219,15.783-9.612,25.329l8.563,50.898c-2.612-0.686-5.205-1.436-7.778-2.245
	c-0.649-7.118-1.951-19.03-4.304-32.363c-2.576-14.605-8.033-28.289-16.217-40.673c-13.621-20.612-27.645-57.891-31.302-67.92
	C139.278,258.191,143.462,254.659,147.335,252.251z M218.55,409.356l-9.812-58.322c-0.408-2.428,0.528-4.896,2.445-6.442
	l21.526-17.359c4.712-3.801,11.553-3.802,16.269,0l21.524,17.358c1.917,1.546,2.854,4.015,2.445,6.443l-9.811,58.322
	c-7.346,0.966-14.788,1.467-22.29,1.467C233.343,410.824,225.898,410.322,218.55,409.356z M355.733,366.113
	c-12.886,11.826-27.352,21.468-42.876,28.733c0.705-5.964,1.688-13.126,3.029-20.728c2.1-11.894,6.543-23.038,13.207-33.122
	c12.931-19.567,25.547-51.124,31.255-66.271c6.867,1.444,13.684,2.183,20.442,2.183c9.116,0,18.121-1.317,26.99-3.938
	C400.956,308.627,382.836,341.239,355.733,366.113z M461.187,208.26c-13.107,18.245-48.365,58.231-98.819,46.438
	c-3.698-9.932-12.393-16.533-18.71-20.209l5.198-9.924c2.563-4.893,0.674-10.936-4.219-13.499s-10.936-0.673-13.498,4.218
	l-29.129,55.611c-14.511,4.891-40.468,10.368-51.166,2.987v-33.038c0-5.523-4.478-10-10-10s-10,4.477-10,10v33.034
	c-10.674,7.344-36.651,1.882-51.169-2.991l-29.127-55.604c-2.563-4.892-8.605-6.781-13.499-4.218
	c-4.892,2.563-6.78,8.606-4.218,13.499l5.198,9.924c-6.317,3.676-15.011,10.277-18.71,20.209
	c-50.451,11.799-85.711-28.192-98.818-46.438c-0.684-0.952-0.693-2.262-0.023-3.258l66.082-98.229
	c1.823-2.71,5.149-3.893,8.271-2.948l34.377,10.404l0.767,16.863l-8.236,3.408l-19.953-17.103
	c-4.023-3.447-10.038-3.16-13.711,0.656c-13.215,13.723-17.441,32.472-21.171,49.013c-2.09,9.266-4.063,18.018-7.292,24.476
	c-2.094,4.188-1.002,9.268,2.629,12.226c3.63,2.957,8.826,2.998,12.504,0.102c21.248-16.741,36.018-5.293,41.38,0.406
	c2.92,3.101,7.48,4.014,11.369,2.273c16.438-7.36,31.063-8.486,43.468-3.347c8.874,3.677,13.592,9.464,14.007,9.99
	c2.979,4.232,8.581,5.325,13.067,2.729l24.433-14.145c5.624,3.187,11.823,4.943,18.375,4.943s12.752-1.756,18.375-4.943
	l24.432,14.145c4.433,2.566,10.086,1.369,13.098-2.772c0.178-0.244,18.188-24.177,57.445-6.6c3.888,1.74,8.449,0.828,11.369-2.273
	c5.363-5.7,20.131-17.146,41.38-0.405c3.678,2.897,8.874,2.855,12.504-0.102c3.631-2.958,4.723-8.038,2.629-12.226
	c-3.229-6.458-5.202-15.21-7.292-24.476c-3.729-16.542-7.957-35.291-21.172-49.014c-3.676-3.816-9.688-4.105-13.711-0.656
	l-19.952,17.102l-8.237-3.408l0.767-16.863l34.378-10.404c3.125-0.944,6.449,0.239,8.271,2.948l66.081,98.23
	C461.88,205.998,461.87,207.307,461.187,208.26z"/>
                        </svg>
                        <img src={workout} alt="" className='w-44 absolute right-4 -bottom-3 opacity-10' />
                        <h2 className='uppercase font-bold text-2xl my-3' >Workout</h2>
                        <p className='font-extralight text-sm' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?
                        </p>
                    </motion.div>
                </motion.section>
                {/* about us */}
                <section id='about' className='flex flex-col p-16 justify-between items-center md:px-24 mx-auto md:flex-row md:py-10 md:mt-5 lg:py-0'
                    ref={ref2}
                >
                    <motion.div className='max-w-4xl mb-3'
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
                        <motion.hr className='border border-y-2 border-neonCarrot w-40 mb-3'
                            variants={whoWeAreItems}
                        />
                        <motion.p className='font-light text-md text-mako mb-6'
                            variants={whoWeAreItemsText}
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </motion.p>
                        <motion.div
                            variants={whoWeAreItemsText}
                        >
                            <div className='flex justify-start items-center mb-3'>
                                <div className="w-14 md:w-11 mr-5 fill-neonCarrot">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 512 512" xml="preserve">
                                        <path d="M128.409,172.138c-13.739-16.825-38.508-19.314-55.319-5.585c-16.818,13.734-19.319,38.501-5.584,55.319
                c13.735,16.82,38.501,19.318,55.318,5.585C139.641,213.724,142.143,188.956,128.409,172.138z"/>
                                        <path d="M495.432,357.937c-0.013,0-0.026,0-0.039,0c-149.637,0.348-179.122,0.433-207.516,0.433l43.188-52.963l135.495-27.691
                c12.258-2.505,20.164-14.473,17.659-26.729c-2.505-12.257-14.468-20.171-26.729-17.659L314.08,262.637
                c-5.119,1.046-9.719,3.83-13.021,7.879l-60.743,74.492l28.099-56.193l1.89-39.535l15.079,5.804
                c6.704-11.114,16.914-12.02,24.384-13.546l43.468-8.884l-95.922-36.921c-14.385-5.542-30.027,4.638-30.765,20.058l-2.52,52.685
                l-32.853-38.065l11.904-91.391c1.677-12.884-11.175-22.81-23.222-17.944l-63.257,25.598c8.855,3.273,16.784,8.855,22.929,16.382
                c2.225,2.725,4.154,5.625,5.781,8.656l20.312-8.22l-7.031,53.983l-47.52,39.716l26.199,10.484l-68.305-4.862l4.561-18.01
                c-6.521-3.334-12.375-7.999-17.149-13.845c-4.556-5.579-7.789-11.808-9.76-18.307l-15.594,61.57
                c-2.6,10.267,4.742,20.408,15.326,21.123l100.832,6.21l-23.591,6.279l41.503,50.823l-148.562,0.389
                C7.382,359.065-0.021,366.5,0,375.651c0.022,9.139,7.436,16.533,16.569,16.533c0.013,0,0.026,0,0.039,0
                c21.044-0.049,456.156-1.053,478.859-1.105c9.152-0.022,16.553-7.457,16.533-16.608
                C511.979,365.331,504.564,357.937,495.432,357.937z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className='font-bold capitalize'>Fitness Exercise</p>
                                    <p className='text-mako text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center'>
                                <div className='w-14 md:w-11 mr-5 fill-neonCarrot'>
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 512 512">
                                        <g>
                                            <g>
                                                <path d="M447.929,117.727c-4.293-6.572-13.195-7.529-18.766-2.484c-22.59,20.452-24.27,21.849-30.17,27.755l-32.16-4.431
                l-3.264,8.831c4.075,8.507,4.667,18.33,1.573,27.29l6.408,0.882c-8.368,11.835-15.685,24.353-21.877,37.417
                c-1.032,20.236,0.823,40.573,5.581,60.402c7.337-34.409,22.545-66.541,44.397-93.947l12.835,1.768
                c9.819,1.36,18.935-5.505,20.295-15.38c0.821-5.957-1.386-11.622-5.426-15.479l18.201-16.479
                C450.108,129.75,451.287,122.867,447.929,117.727z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M352.064,102.663c-6.429-2.381-13.562,0.909-15.938,7.335l-6.275,16.975c8.805-0.312,17.083,2.597,23.59,7.749
                L359.4,118.6C361.775,112.174,358.491,105.038,352.064,102.663z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M369.79,470.721c20.18-5.182,35.096-23.494,35.096-45.291c0-8.227-2.132-15.954-5.863-22.668
                c-4.042-7.275-9.965-13.354-17.116-17.587l-30.822-78.791c-13.526-34.577-18.247-71.586-14.162-107.891
                c-1.281,0.209,0.212,0.023-25.228,2.878c-3.45,38.461,1.977,77.483,16.283,114.054l24.446,62.492l-15.738-2.092l-14.644-37.436
                l-3.796,34.985l-45.93-6.105c-3.413,5.495-7.955,10.017-14.021,13.427l7.677,0.371c7.447,0.36,13.691,6.185,14.055,13.632
                c0.426,8.723-6.759,15.553-15.069,15.133c-5.998-0.29-45.499-2.2-50.707-2.451c-7.938-0.384-14.063-7.131-13.679-15.069
                c0.335-6.908,5.673-14.134,16.396-13.614c-7.172-5.028-12.503-12.379-15.005-20.781l-25.212-3.351l12.442-39.078
                c0.861-2.705,1.161-5.558,0.88-8.383l-4.25-42.801c-39.847-7.433-38.686-7.036-42.733-8.495l5.078,51.134l-12.853,40.372
                c-40.851,2.645-73.171,36.596-73.171,78.115c0,22.908,9.84,43.516,25.521,57.834l-11.571,11.573
                c-3.517,3.517-4.167,9.154-1.188,13.137c3.713,4.963,10.785,5.337,15.004,1.119l14.27-14.27
                c10.844,5.679,23.175,8.909,36.265,8.909c11.673,0,204.623-29.823,204.623-29.823l34.605,35.132
                c3.845,3.903,10.129,3.954,14.036,0.106c3.904-3.845,3.952-10.129,0.106-14.035L369.79,470.721z M187.181,427.867
                c-1.206,23.775-20.525,43.094-44.3,44.299c-27.767,1.407-50.576-21.402-49.169-49.169c1.205-23.776,20.523-43.094,44.299-44.3
                C165.778,377.289,188.587,400.099,187.181,427.867z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M276.345,4.526c-21.323-11.089-47.407-1.002-55.722,21.548c-6.856,18.595,1.331,39.766,18.915,48.909
                c21.323,11.088,47.404,1.002,55.72-21.547C302.116,34.841,293.93,13.67,276.345,4.526z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M329.08,145.061l-61.898,6.948l-37.539-44.723c8.081,5.694,19.952,14.058,37.726,26.582l45.346-5.088
                c0,0-66.685-29.258-106.918-47.052c-12.254-5.419-27.225,2.284-32.704,16.705c-3.937,10.366-34.858,91.771-39.883,105.002
                c-5.437,14.312-0.029,29.891,12.679,34.718c4.24,2.336,0.112,1.14,81.622,16.344l-9.738,89.99
                c-1.385,12.807,8.651,23.935,21.51,23.935c10.887,0,20.256-8.208,21.456-19.285L272.63,239.25
                c1.215-11.227-6.419-21.496-17.52-23.567l-34.287-6.395l8.572-20.716c-2.912-6.19-24.572-52.255-27.337-58.133l43.744,52.117
                c3.814,4.546,9.71,7,15.801,6.319l71.024-7.971c9.184-1.031,16.488-8.663,16.47-17.906
                C349.077,152.069,339.64,143.875,329.08,145.061z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <p className='font-bold capitalize'>Cardio training</p>
                                    <p className='text-mako text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div className='hidden md:w-96 h-3/4 min-h-max lg:block'
                        variants={whoWeAreItemsImg}
                        initial="hidden"
                        animate="visible"
                    >
                        <img src={pose} alt="pose" className='max-w-full max-h-full' />
                    </motion.div>
                </section>
                {/* What we offer  */}
                <motion.section id='services' className='flex flex-col text-center bg-zinc-900 w-full h-max p-16'
                    ref={ref3}
                    variants={whatWeOfferVariants}
                    initial="hidden"
                    animate={whatWeOfferAnimation}
                >
                    <motion.p className='capitalize text-white font-bold text-5xl mx-auto'
                        variants={whatWeOfferItemsVariants}
                    >what we offer</motion.p>
                    <motion.hr className='border-2 border-neonCarrot w-32 mb-3 mx-auto'
                        variants={whatWeOfferItemsVariants}
                    />
                    <motion.p className='text-white font-light text-sm max-w-xl mb-5 mx-auto'
                        variants={whatWeOfferItemsVariants}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis</motion.p>
                    <motion.div className='flex flex-col gap-10 items-center justify-between md:px-10 md:flex-wrap md:flex-row'
                        variants={whatWeOfferCardBoxVariants}
                    >
                        <motion.div variants={whatWeOfferCardVariants}>
                            <OfferCard svg={<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 511.998 511.998" xml="preserve">
                                <circle cx="264.358" cy="55.54" r="42.502" />
                                <path d="M418.946,203.093c-9.346-5.34-21.253-2.092-26.593,7.255c-3.145,5.504-3.291,11.889-0.987,17.305l-3.069,5.372
			l-29.226-30.973l-24.156-74.089c-2.414-7.404-8.961-12.298-16.251-12.975v-0.267h-94.239c-0.222-0.096-0.431-0.208-0.659-0.297
			L166.9,92.138l-4.832-55.134l10.35,0.042c3.541,4.701,9.143,7.764,15.484,7.791c10.765,0.043,19.527-8.647,19.57-19.411
			c0.043-10.765-8.647-19.527-19.412-19.57c-6.339-0.026-11.968,2.992-15.546,7.664l-12.904-0.052
			c-2.524-8.414-10.677-14.185-19.774-13.396c-7.886,0.692-14.208,6.129-16.418,13.25l-5.138-0.021
			c-3.541-4.701-9.143-7.765-15.484-7.791c-10.763-0.045-19.526,8.646-19.57,19.41c-0.044,10.765,8.647,19.527,19.412,19.57
			c6.339,0.025,11.968-2.992,15.546-7.664l5.879,0.023l6.159,70.278c0.628,7.159,5.256,13.345,11.947,15.966l67.787,26.565
			c0.032,0.013,0.065,0.021,0.099,0.033v132.598l-46.906,199.465c-3.11,13.228,5.091,26.474,18.319,29.585
			c13.235,3.11,26.475-5.095,29.585-18.319l47.575-202.305h11.464l47.575,202.305c3.11,13.226,16.352,21.429,29.585,18.319
			c13.229-3.111,21.43-16.357,18.319-29.585L318.664,282.29v-82.082l5.74,17.608c0.866,2.657,2.31,5.089,4.228,7.121l40.04,42.435
			l-4.21,7.369c-5.836,0.765-11.261,4.133-14.406,9.638c-5.34,9.346-2.092,21.253,7.255,26.593
			c9.346,5.34,21.253,2.092,26.593-7.255c3.145-5.504,3.291-11.889,0.987-17.305l2.415-4.227c6.139,1.285,12.386-0.51,16.88-4.749
			c7.523-7.1,7.929-18.9,0.98-26.51l6.629-11.603c5.836-0.765,11.261-4.134,14.406-9.638
			C431.541,220.339,428.292,208.434,418.946,203.093z"/>
                            </svg>} title="aerobics / dancerise" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate" />
                        </motion.div>
                        <motion.div variants={whatWeOfferCardVariants}>
                            <OfferCard svg={<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 494.138 494.138" xml="preserve">
                                <path id="XMLID_9_" d="M247.069,163.687c24.872,0,45.02-20.146,45.02-45.021c0-24.858-20.147-45.014-45.02-45.014
		c-24.874,0-45.007,20.156-45.007,45.014C202.063,143.54,222.195,163.687,247.069,163.687z"/>
                                <path id="XMLID_10_" d="M462.838,17.042c-6.31,0-11.647,3.282-15.1,8.033v-6.082C447.738,8.5,439.221,0,428.734,0
		c-10.484,0-19.002,8.5-19.002,18.994v28.1H84.404v-28.1C84.404,8.5,75.889,0,65.402,0C54.917,0,46.4,8.5,46.4,18.994v6.082
		c-3.453-4.751-8.792-8.033-15.099-8.033c-10.485,0-19.002,8.5-19.002,18.994V82.92c0,10.493,8.517,18.994,19.002,18.994
		c6.307,0,11.646-3.282,15.099-8.025v6.082c0,10.493,8.517,18.994,19.002,18.994c10.486,0,19.002-8.501,19.002-18.994v-28.1h12.002
		c0.322,1.751,37.697,75.509,37.697,75.509c1,1.952,2.339,3.711,3.951,5.21l54.459,50.651v134.08l-44.166,42.424
		c-4.388,4.202-6.855,10.01-6.855,16.084v76.008c0,12.316,9.984,22.301,22.293,22.301c12.309,0,22.293-9.985,22.293-22.301V405.33
		l32.115-30.85h57.749l32.134,30.85v66.507c0,12.316,9.984,22.301,22.292,22.301c12.308,0,22.293-9.985,22.293-22.301v-76.008
		c0-6.074-2.468-11.881-6.855-16.084l-44.149-42.409V203.225l54.426-50.643c1.612-1.491,2.951-3.251,3.951-5.202
		c0,0,37.375-73.758,37.699-75.509h12v28.1c0,10.493,8.518,18.994,19.002,18.994c10.486,0,19.004-8.501,19.004-18.994v-6.09
		c3.452,4.751,8.789,8.033,15.1,8.033c10.483,0,19-8.501,19-18.994V36.036C481.838,25.542,473.321,17.042,462.838,17.042z
		 M327.771,127.03l-48.699,45.32h-63.975l-48.732-45.32l-28.422-55.16h218.251L327.771,127.03z"/>
                            </svg>} title={"body building"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate"} />
                        </motion.div>
                        <motion.div variants={whatWeOfferCardVariants}>
                            <OfferCard svg={<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 429.232 429.232" xml="preserve">
                                <path id="XMLID_936_" d="M316.171,333.405c32.458,0,58.865-26.407,58.865-58.866s-26.407-58.867-58.865-58.867
	c-32.46,0-58.868,26.408-58.868,58.867S283.711,333.405,316.171,333.405z M316.171,234.671c21.981,0,39.865,17.885,39.865,39.867
	s-17.884,39.866-39.865,39.866c-21.983,0-39.868-17.884-39.868-39.866S294.188,234.671,316.171,234.671z M419.434,403.707h-31.416
	c0.027-0.292,0.041-0.588,0.041-0.887c0-5.247-4.253-9.5-9.5-9.5h-21.021l-9.265-10.361c46.758-13.866,80.96-57.223,80.96-108.419
	c0-62.343-50.719-113.062-113.062-113.062c-14.955,0-29.485,2.877-43.192,8.552c-10.518,3.998-22.298,8.224-34.916,12.627
	l17.797-70.101h30.759c5.247,0,9.5-4.253,9.5-9.5s-4.253-9.5-9.5-9.5h-76.293c-5.247,0-9.5,4.253-9.5,9.5s4.253,9.5,9.5,9.5h25.932
	l-19.679,77.511c-7.727,2.641-15.652,5.331-23.701,8.063c-55,18.669-117.308,39.817-154.698,58.743V156.736l20.988-42.179
	l22.446,7.087c5.002,1.574,10.34-1.195,11.92-6.199c1.579-5.004-1.196-10.34-6.199-11.92L45.095,90.191L27.153,13.855
	c-1.201-5.106-6.31-8.277-11.422-7.074c-5.107,1.2-8.274,6.314-7.074,11.422l19.136,81.414c0.573,5.418,6.352,7.044,6.543,7.102
	l6.49,2.049l-20.652,41.504c-0.654,1.315-0.995,2.764-0.995,4.232v116.317C7.03,283.442,0,300.41,0,318.61
	c0,29.451,18.553,54.653,44.585,64.531l-9.103,10.179H14.461c-5.247,0-9.5,4.253-9.5,9.5c0,0.714,0.079,1.408,0.228,2.077
	c-2.917,1.621-4.892,4.735-4.892,8.31c0,5.247,4.253,9.5,9.5,9.5h409.637c5.247,0,9.5-4.253,9.5-9.5
	S424.681,403.707,419.434,403.707z M19,318.61c0-14.018,5.758-27.028,15.606-36.32c0.342-0.273,0.665-0.569,0.966-0.887
	c3.211-2.873,6.829-5.363,10.802-7.383c36.13-18.362,98.012-39.366,152.609-57.898c29.923-10.156,58.186-19.75,80.882-28.384
	c0.09-0.034,0.179-0.069,0.268-0.106c11.424-4.746,23.549-7.153,36.038-7.153c51.865,0,94.062,42.196,94.062,94.062
	c0,51.864-42.196,94.06-94.062,94.06H68.99C41.426,368.598,19,346.173,19,318.61z M328.021,393.32c-5.247,0-9.5,4.253-9.5,9.5
	c0,0.299,0.014,0.595,0.041,0.887H74.459c0.027-0.292,0.041-0.588,0.041-0.887c0-5.247-4.253-9.5-9.5-9.5h-4.028l5.168-5.779
	c0.945,0.039,1.896,0.059,2.851,0.059h247.181c3.485,0,6.938-0.159,10.344-0.469l5.534,6.189H328.021z"/>
                            </svg>} title={"weight loss"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate"} />
                        </motion.div>
                        <motion.div variants={whatWeOfferCardVariants}>
                            <OfferCard svg={<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 512.001 512.001" xml="preserve">
                                <path d="M460.677,129.993c-3.431-7.175-12.029-10.208-19.201-6.777L410.983,137.8c3.042,12.953-0.331,26.102-8.238,35.86
			l51.155-24.466C461.073,145.764,464.108,137.167,460.677,129.993z"/>
                                <path d="M406.957,464.091c23.422-6.013,40.732-27.266,40.732-52.562c0-22.851-14.132-42.389-34.127-50.387l-36.698-172.118
			l-27.629,8.506l33.762,158.349l-92.043-12.234l-20.879,62.429c-7.95,23.772-33.621,36.353-57.127,28.492
			c-7.511-2.512-13.919-6.823-18.921-12.29c-4.989,24.846-26.927,43.563-53.242,43.563c-29.995,0-54.31-24.315-54.31-54.31
			s24.315-54.31,54.31-54.31c16.681,0,31.6,7.524,41.561,19.36l13.835-45.529l-20.893-50.383l19.159-0.278l-39.804-30.163
			l82.158,33.952l-33.318,99.627c-4.393,13.135,2.694,27.344,15.829,31.737c13.145,4.395,27.348-2.704,31.737-15.829l40.686-121.655
			c4.158-12.428-1.957-25.962-14.032-31.059l-46.772-19.739c11.647-16.745,11.559-16.618,24.39-35.064l-39.181-54.138l61.125,50.001
			c5.349,4.376,12.615,5.883,19.381,3.797l79.798-24.566c11.031-3.396,17.221-15.091,13.824-26.121
			c-3.396-11.031-15.088-17.221-26.122-13.824l-69.09,21.27l-52.451-42.905l46.998,21.378c-1.341-7.665-5.533-14.835-12.297-19.781
			L233.47,75.251c-14.504-10.605-34.954-6.764-44.633,8.35l-70.332,109.832c-11.171,17.444-3.63,40.62,15.351,48.338l9.62,3.912
			l-30.112-0.036c-9.67,0-17.51,7.839-17.51,17.51s7.84,17.51,17.51,17.51h30.752l17.599,42.439
			c-6.722-1.586-13.723-2.45-20.929-2.45c-50.188,0-90.874,40.686-90.874,90.874c0,26.587,11.421,50.503,29.619,67.12
			l-13.686,13.686c-4.498,4.498-4.498,11.792,0,16.29c4.499,4.498,11.792,4.497,16.29,0l16.561-16.562
			c12.586,6.591,26.896,10.339,42.088,10.339c46.176,0,237.481-34.612,237.481-34.612l40.161,40.774
			c4.463,4.531,11.758,4.587,16.289,0.123c4.533-4.463,4.587-11.757,0.123-16.289L406.957,464.091z"/>
                                <circle cx="299.559" cy="46.129" r="46.129" />
                            </svg>} title="spinning" body="Lorem ipsum dolor sit amet consectetur adipisicing elit" />
                        </motion.div>
                    </motion.div>
                    <div className='flex w-44 h-10 items-center justify-center space-x-3 mb-16 mx-auto'>
                        <motion.span className='w-7 bg-neonCarrot h-1'
                        ></motion.span>
                        <motion.span className='w-7 bg-gray-500 h-1'
                        ></motion.span>
                        <motion.span className='w-7 
                        bg-gray-500 h-1'
                        ></motion.span>
                    </div>
                </motion.section>
                {/* title here banner */}
                <motion.section className='flex flex-col relative w-full'
                    ref={ref}
                >
                    <motion.div className='py-5 flex bg-neonCarrot w-95p items-center absolute h-60 -top-24 right-0 overflow-hidden shadow-2xl rounded-l-lg md:py-0 md:h-72'
                        variants={titleHereVariants}
                        initial="hidden"
                        animate={titleHereAnimation}
                    >
                        <img src={pose2} alt="imge" className='hidden h-full md:block' />
                        <div className='flex flex-col mx-16 md:ml-16 md:py-3 justify-start items-start text-white'>
                            <p className='uppercase font-bold text-2xl md:text-4xl'>Title here</p>
                            <hr className='w-20 border md:w-28 md:border-2' />
                            <p className='text-xs max-w-xl my-3 md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis</p>
                            <motion.div whileHover={{ scale: 1.1 }} >
                                <Link to="#" className='uppercase text-white border border-white p-2 text-xs rounded-lg hover:border-none hover:text-black hover:bg-white md:p-3'>join us now</Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.section>
                {/* Reviews */}
                <section className='flex items-center justify-center space-x-10 text-left w-full h-max mb-16 pb-16 pt-52 px-16 md:pt-60 md:mb-0'>
                    <div className='w-96 h-64'>
                        <p className='uppercase text-gray-600 text-sm font-bold'>testimonial</p>
                        <p className='capitalize font-bold text-5xl'>Reviews from you</p>
                        <hr className='border-2 border-neonCarrot w-32 mb-5' />
                        {/* main reviews */}
                        <AnimatePresence>
                            {reviewCard && (
                                <motion.div className=" flex flex-col py-3 bg-bottom relative"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    exit={{ opacity: 0, x: -100 }}
                                >
                                    <Review reviewCard={reviewCard} />
                                </motion.div>)}
                        </AnimatePresence>
                    </div>

                    <div className='hidden w-96 h-96 md:grid grid-cols-2 grid-rows-2 items-center gap-2 grid-flow-row-dense pt-5'>
                        <img src={pose} alt="photopic" className='w-full h-full' />
                        <img src={pose2} alt="photopic" className='w-full h-full' />
                        <img src={logo2} alt="photopic" className='w-full h-full' />
                        <img src={logo3} alt="photopic" className='w-full h-full' />
                    </div>
                </section>
                {/* video clip */}
                <section className='relative w-full h-max bg-gray-200'>
                    <div className='h-20 md:h-60 bg-black'>

                    </div>
                    {/* video */}
                    <iframe width="1621" height="772" src="https://www.youtube.com/embed/ZFiAq6QQRqA" title="Light vs Heavy Weight (Science-Based)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className='w-full h-96 md:absolute md:top-20 lg:left-[17%] lg:w-8/12 lg:rounded-lg' allowFullScreen></iframe>
                    <div className='h-20 md:h-80 bg-white'>

                    </div>
                </section>
                {/* contact us */}
                <section id='contact' className='relative'>
                    <div className='h-20 md:h-60 bg-gray-200'></div>
                    <motion.div className='flex flex-col justify-between px-12 py-16 bg-neonCarrot text-white text-center gap-3 drop-shadow-2xl md:w-[70%] md:left-[16%] md:text-left md:rounded-2xl max-w-7xl md:flex-row md:absolute md:top-28 lg:top-28 lg:left-[21%] lg:w-[55%]'
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="pb-2 md:pb-none">
                            <p className='uppercase text-3xl font-bold md:text-4xl' >lets start!</p>
                            <p className='uppercase text-sm md:font-bold md:text-lg' >subscribe to our newsletter</p>
                            <p className='text-xs md:text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt</p>
                        </div>
                        <form className='flex flex-col space-y-3 lg:w-96' >
                            <input type="text" placeholder='Name' className='p-2 text-gray-600 rounded-sm' />
                            <input type="text" placeholder='Email' className='p-2 text-gray-600 rounded-sm' />
                            <motion.input type="button" value="subscribe" className='uppercase text-sm bg-zinc-900 p-2 rounded-sm hover:bg-zinc-800 hover:cursor-pointer'
                                whileTap={{ scale: 0.97 }}
                            />
                        </form>
                    </motion.div>
                    <div className='h-20 md:h-72 bg-white'></div>
                </section>

            </motion.main>
        </>
    );
}

export default Home;