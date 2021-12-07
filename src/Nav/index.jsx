import './Nav.scss';
import { motion } from 'framer-motion';

// const containerVariant = {
//     hidden: {
//         opacity: 0
//     },
//     visible: {
//         opacity: 1,
//         transition: {
//             duration: 1,
//             delay: 0.5
//         }
//     }
// }

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
            staggerChildren: 0.3,
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
            delay: 4.5,
            duration: 1
        }
    }
}

const Nav = () => {
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
                <motion.button className="navbar__wrapper__hamburger title-spaced" variants={buttonVariant} initial="hidden" animate="visible">=</motion.button>
            </div>
        </motion.nav>
    )
}

export default Nav;