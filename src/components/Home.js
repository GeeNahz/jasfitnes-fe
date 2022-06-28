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


const boxClass = 'flex flex-col justify-center text-center px-16 w-96 h-96 overflow-hidden md:max-h-7xl md:max-w-7xl shadow-2xl'

const Home = () => {

    const titleHereAnimation = useAnimation();
    const whoWeAreAnimation = useAnimation();
    const whatWeOfferAnimation = useAnimation();

    const [ref, inView] = useInView({ threshold: 0.2 });
    const [ref2, inView2] = useInView({ threshold: 0.5  });
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
                    <motion.div className={ boxClass + ' bg-zinc-800 text-white md:rounded-bl-xl'} variants = { blackBoxVariants }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M18 5V2h12v3Zm4.5 22.35h3v-11.5h-3Zm1.5 16.6q-3.7 0-6.975-1.425Q13.75 41.1 11.3 38.65q-2.45-2.45-3.875-5.725Q6 29.65 6 25.95q0-3.7 1.425-6.975Q8.85 15.7 11.3 13.25q2.45-2.45 5.725-3.875Q20.3 7.95 24 7.95q3.35 0 6.3 1.125 2.95 1.125 5.25 3.125l2.55-2.55 2.1 2.1-2.55 2.55q1.8 2 3.075 4.85Q42 22 42 25.95q0 3.7-1.425 6.975Q39.15 36.2 36.7 38.65q-2.45 2.45-5.725 3.875Q27.7 43.95 24 43.95Zm0-3q6.25 0 10.625-4.375T39 25.95q0-6.25-4.375-10.625T24 10.95q-6.25 0-10.625 4.375T9 25.95q0 6.25 4.375 10.625T24 40.95ZM24 26Z" /></svg>   
                        <h2 className='uppercase font-bold text-2xl my-3' >progression</h2>
                        <p className='font-extralight text-sm text-gray-200' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?
                        </p>
                    </motion.div>
                    <motion.div className={boxClass + ' bg-neonCarrot text-black rounded-bl-xl md:rounded-bl-none rounded-br-xl'} variants = { yellowBoxVariants }
                    >
                        <img src="#" alt="logo" />
                        <h2 className='uppercase font-bold text-2xl my-3' >Workout</h2>
                        <p className='font-extralight text-sm' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis cum quo impedit?
                        </p>
                    </motion.div>
                </motion.section>
                {/* about us */}
                <section className='flex flex-col md:flex-row justify-center space-x-10 items-center mt-5 px-16 mx-auto'
                    ref={ref2}
                >
                    <motion.div className='max-w-lg mb-3'
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
                                <div className="w-20 md:w-11 mr-5 fill-neonCarrot">
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
                                <div className='w-20 md:w-11 mr-5 fill-neonCarrot'>
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
                    <motion.div className='hidden md:block md:w-96 h-3/4 min-h-max'
                        variants={whoWeAreItemsImg}
                        initial="hidden"
                        animate="visible"
                    >
                        <img src={pose} alt="pose" className='max-w-full max-h-full' />
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
                    <motion.hr className='border-2 border-neonCarrot w-32 mb-3'
                        variants={whatWeOfferItemsVariants}
                    />
                    <motion.p className='text-white font-light text-sm max-w-xl mb-5'
                        variants={whatWeOfferItemsVariants}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt voluptate eum temporibus deserunt voluptates corporis</motion.p>
                    <motion.div className='flex flex-col gap-3 mb-5 overflow-hidden px-16 justify-center items-center md:grid md:grid-cols-3 md:w-max md:px-3 lg:grid-cols-4' 
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
                                viewBox="0 0 494.138 494.138"  xml="preserve">
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
                            </svg>} title={"body building"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate"}/>
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
                            </svg>} title={"weight loss"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate"}/>
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
                    <div className='flex w-44 h-10 items-center justify-center space-x-3 mb-16'>
                        <motion.span className='w-7 bg-neonCarrot h-1'
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
                    <motion.div className='py-5 flex bg-neonCarrot w-95p items-center absolute -top-24 right-0 overflow-hidden md:py-0 shadow-2xl rounded-l-lg'
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
                        <hr className='border-2 border-neonCarrot w-32 mb-5' />
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

                                    <p className='text-mako text-sm'>{reviewCard.review}</p>
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
                    <motion.div className='flex flex-col justify-between px-12 py-16 mx-auto bg-neonCarrot text-white text-center gap-3 drop-shadow-2xl md:w-3/5 md:left-48 lg:left-96 md:text-left md:rounded-2xl max-w-7xl md:flex-row md:absolute md:top-28 lg:top-28'
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="pb-2 md:pb-none">
                            <p className='uppercase text-3xl font-bold md:text-4xl' >lets start!</p>
                            <p className='uppercase text-sm md:font-bold md:text-lg' >subscribe to our newsletter</p>
                            <p className='text-xs md:text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod iste nesciunt</p>
                        </div>
                        <div>
                            <form className='flex flex-col space-y-3 lg:w-96' >
                                <input type="text" placeholder='Name' className='p-2 text-gray-600 rounded-sm' />
                                <input type="text" placeholder='Email' className='p-2 text-gray-600 rounded-sm' />
                                <motion.input type="button" value="subscribe" className='uppercase text-sm bg-zinc-900 p-2 rounded-sm hover:bg-zinc-800'
                                    whileTap={{ scale: 0.97 }}
                                />
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