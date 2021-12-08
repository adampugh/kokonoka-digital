import './Menu.scss';
import { motion } from 'framer-motion';
import Leaf from '../assets/img/palm-leaf.png';


const blackVariant = {
    hidden: {
        y: '-100vh'
    },
    visible: {
        y: ['-100vh', '0vh'],
        transition: {
            type: 'tween',
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

const ulContainerVariant = {
    hidden: {
        opacity: 0,
        y: -200
    },
    visible: {
        opacity: 1,
            y: 0,
            transition: {
                type: 'intertia',
                when: 'beforeChildren',
                staggerChildren: 0.6,
                delay: 1,
                duration: 1
            },
    }
}

const liChildVariant = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1
        }
    }
}

const navMenuVariant = {
    hidden: {
        opacity: 0
    },
    visible:  {
        opacity: 1,
        transition: {
            delay: 2, 
            duration: 2
        }
    }
}

const Menu = ({ handleHamburgerClick }) => {
    return (
        <motion.div id="menu" variants={blackVariant} initial="hidden" animate="visible">
            <div className="container menu__navbar__wrapper__container">

            <motion.div className="menu__navbar__wrapper" variants={navMenuVariant}>
                <button className="menu__navbar__wrapper__contact title-spaced">Get in touch</button>
                <button className="menu__navbar__wrapper__logo title-spaced">Kokonoka</button>
                <button className="menu__navbar__wrapper__hamburger" onClick={handleHamburgerClick}>X</button>
            </motion.div>
            </div>
            <motion.div className="loading__text">
                <h1 className="loading__title">KOKONOKA</h1>
            </motion.div>
            <div className="loading__leaf">
                <motion.img src={Leaf} alt="palm leaf" initial={{ scale: 1.6 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: 'easeInOut'}}/>
            </div>
            <motion.ul className="menu__items" variants={ulContainerVariant} initial="hidden" animate="visible">
                <motion.li variants={liChildVariant}>01 <span>Home</span></motion.li>
                <motion.li variants={liChildVariant}>02 <span>Work</span></motion.li>
                <motion.li variants={liChildVariant}>03 <span>Team</span></motion.li>
                <motion.li variants={liChildVariant}>04 <span>Careers</span></motion.li>
                <motion.li variants={liChildVariant}>05 <span>Contact</span></motion.li>
            </motion.ul>
        </motion.div>
    )
}

export default Menu;