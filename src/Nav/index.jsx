import './Nav.scss';
import { motion, transform } from 'framer-motion';

const containerVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5
        }
    }
}

const Nav = () => {
    return (
        <motion.nav id="navbar" className="container" variants={containerVariant} initial="hidden" animate="visible">
            <div className="navbar__wrapper">
                <button className="navbar__wrapper__contact title-spaced">Get in touch</button>
                <button className="navbar__wrapper__logo title-spaced">Kokonoka</button>
                <button className="navbar__wrapper__hamburger">=</button>
            </div>
        </motion.nav>
    )
}

export default Nav;