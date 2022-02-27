import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import GreyLeaf from '../assets/img/palm-leaf-grey.png';

import scrollToElement from '../utils/utils';
import Menu from '../Menu';

const letterVariant = {
    hidden: {},
    visible: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.2,
        },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
};

const leafVariantLeft = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: [0, 1, 0.4],
        x: -50,
        transition: {
            duration: 2.4,
            ease: 'easeInOut',
        },
    },
};

const leafVariantRight = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: [0, 1, 0.4],
        x: 50,
        transition: {
            duration: 2.4,
            ease: 'easeInOut',
        },
    },
};

const Nav = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const bodyTag = document.body.classList;
    const navigate = useNavigate();
    const location = useLocation();
    const buttonVariantDelay = location.pathname === '/' ? 4 : 1.5;

    const handleHamburgerClick = () => {
        menuIsVisible ? bodyTag.remove('menu__open') : setTimeout(() => bodyTag.add('menu__open'), 2000);
        setMenuIsVisible(!menuIsVisible);
    };

    const handleMenuItemClick = (link) => {
        handleHamburgerClick();
        const isHomePage = location.pathname === '/';
        const delayDuration = isHomePage ? 1200 : 4000;
        if (!isHomePage) navigate(`/#${link}`);
        setTimeout(() => scrollToElement(link), delayDuration);
    };

    return (
        <motion.nav id='navbar' className='container'>
            <div className='navbar__wrapper'>
                <motion.button
                    className='navbar__wrapper__contact title-spaced'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: buttonVariantDelay, duration: 1 }}
                    onClick={() => scrollToElement('contact')}>
                    <span className='navbar__wrapper__contact__mobile'>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </span>
                    <span className='navbar__wrapper__contact__desktop'>Get in touch</span>
                </motion.button>
                <button className='navbar__wrapper__logo title-spaced'>
                    <Link to='/'>
                        <motion.span variants={letterVariant} initial='hidden' animate='visible'>
                            {['K', 'O', 'K', 'O', 'N', 'O', 'K', 'A'].map((letter) => (
                                <motion.span variants={childVariants}>{letter}</motion.span>
                            ))}
                        </motion.span>
                    </Link>
                </button>
                <motion.button
                    className='navbar__wrapper__hamburger title-spaced'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: buttonVariantDelay, duration: 1 }}
                    onClick={handleHamburgerClick}>
                    <FontAwesomeIcon icon={faBars} />
                </motion.button>
            </div>
            <motion.div className='navbar__leaf__left--1' variants={leafVariantLeft} initial='hidden' animate='visible'>
                <img src={GreyLeaf} alt='palm leaf' />
            </motion.div>
            <motion.div className='navbar__leaf__left--2' variants={leafVariantLeft} initial='hidden' animate='visible'>
                <img src={GreyLeaf} alt='palm leaf' />
            </motion.div>
            <div className='leaf__right__wrapper'>
                <motion.div
                    className='navbar__leaf__right--1'
                    variants={leafVariantRight}
                    initial='hidden'
                    animate='visible'>
                    <img src={GreyLeaf} alt='palm leaf' />
                </motion.div>
                <motion.div
                    className='navbar__leaf__right--2'
                    variants={leafVariantRight}
                    initial='hidden'
                    animate='visible'>
                    <img src={GreyLeaf} alt='palm leaf' />
                </motion.div>
            </div>
            <AnimatePresence>
                {menuIsVisible && (
                    <Menu handleHamburgerClick={handleHamburgerClick} handleMenuItemClick={handleMenuItemClick} />
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Nav;
