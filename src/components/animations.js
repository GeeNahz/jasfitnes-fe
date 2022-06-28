

export const boxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
}

export const blackBoxVariants = {
    hidden: {
        // x: -100,
        y: -100,
        opacity: 0
    },
    visible: {
        // x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
        }
    }
}

export const yellowBoxVariants = {
    hidden: {
        // x: 100,
        y: -100,
        opacity: 0
    },
    visible: {
        // x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.8,
            ease: "easeInOut"
        }
    }
}

export const whoWeAreBoxVariants = {
    hidden: {
    },
    visible: {
        transition: {
            staggerChildren: 0.3,
            // staggerDirection: -1,
            when: "beforeChildren"
        }
    },
}

export const whoWeAreItems = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
}

export const whoWeAreItemsImg = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}

export const whoWeAreItemsText = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

export const whatWeOfferVariants = {
    hidden: {  },
    visible: {  
        transition: {
            staggerChildren: 0.5,
            ease: "easeOut" 
        } 
    }
}

export const whatWeOfferItemsVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

export const whatWeOfferLineVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(234 179 8 / 1) ",
        transition: {
            duration: 1.5,
            ease: "easeInOut"
        }
    }
}

export const whatWeOfferCardBoxVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

export const whatWeOfferCardVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            ease: "easeOut"
        }
    }
}

export const titleHereVariants = {
    hidden: { x: 8000 },
    visible: {
        x: 0,
        transition: {
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 25,
            ease: "easeInOut"
        }
    }
}

// export const contactBtnVariants = {
//     hidden: { },
//     visible: { },
//     hover: { scale: 1.1 }
// }
