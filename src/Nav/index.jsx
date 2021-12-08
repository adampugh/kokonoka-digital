import { useState } from 'react';
import { motion } from 'framer-motion';
import './Nav.scss';
import GreyLeaf from '../assets/img/palm-leaf-grey.png'

import Menu from '../Menu';


const letterVariant = {
    hidden: {
        // opacity: 0,
        // y: 1200,
    },
    visible: {
        // y: 0,
        // opacity: 1,
        transition: {
            // delay: 1,
            // duration: 1, 
            when: 'beforeChildren',
            staggerChildren: 0.2,
        }
    },
    
}

const childVariants = {
    hidden: {
        opacity: 0,
        // y: 1000,
    },
    visible: {
        opacity: 1,
        // y: 0,
        transition: {
            duration: 0.4
        }
    },
};

const buttonVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 4,
            duration: 1
        }
    }
}

const leafVariantLeft = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: [0, 1, 0.4],
        x: -50,
        transition: {
            duration: 2.4,
            ease: 'easeInOut'
        }
    }
}


const leafVariantRight = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: [0, 1, 0.4],
        x: 50,
        transition: {
            duration: 2.4,
            ease: 'easeInOut'
        }
    }
}

const Nav = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const handleHamburgerClick = () => {
        setMenuIsVisible(!menuIsVisible);
    }

    return (
        <motion.nav id="navbar" className="container">
            <div className="navbar__wrapper">
                <motion.button className="navbar__wrapper__contact title-spaced" variants={buttonVariant} initial="hidden" animate="visible">
                    Get in touch</motion.button>
                <button className="navbar__wrapper__logo title-spaced">
                    <motion.span variants={letterVariant} initial="hidden" animate="visible">
                        <motion.span variants={childVariants}>K</motion.span>
                        <motion.span variants={childVariants}>O</motion.span>
                        <motion.span variants={childVariants}>K</motion.span>
                        <motion.span variants={childVariants}>O</motion.span>
                        <motion.span variants={childVariants}>N</motion.span>
                        <motion.span variants={childVariants}>O</motion.span>
                        <motion.span variants={childVariants}>K</motion.span>
                        <motion.span variants={childVariants}>A</motion.span>
                    </motion.span>
                </button>
                <motion.button className="navbar__wrapper__hamburger title-spaced" 
                    variants={buttonVariant}
                    initial="hidden"
                    animate="visible"
                    onClick={handleHamburgerClick}>=</motion.button>
            </div>
            <motion.div className="navbar__leaf__left--1" variants={leafVariantLeft} initial="hidden" animate="visible">
                <img src={GreyLeaf} alt="palm leaf" />
            </motion.div>
            <motion.div className="navbar__leaf__left--2" variants={leafVariantLeft} initial="hidden" animate="visible">
                <img src={GreyLeaf} alt="palm leaf" />
            </motion.div>

            <div className="leaf__right__wrapper">
            <motion.div className="navbar__leaf__right--1" variants={leafVariantRight} initial="hidden" animate="visible">
                <img src={GreyLeaf} alt="palm leaf" />
            </motion.div>
            <motion.div className="navbar__leaf__right--2" variants={leafVariantRight} initial="hidden" animate="visible">
                <img src={GreyLeaf} alt="palm leaf" />
            </motion.div>
            </div>
            {menuIsVisible && <Menu handleHamburgerClick={handleHamburgerClick} />}
        </motion.nav>
    )
}

export default Nav;