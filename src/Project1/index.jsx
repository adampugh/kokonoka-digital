import { motion } from 'framer-motion';

import Nav from '../Nav';
import Contact from '../Contact';
import Footer from '../Footer';

const containerVariants = {
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut',
            duration: .5
        }
    }
}

const Project1 = () => {
    return (
        <motion.div variants={containerVariants} exit="exit">
            <Nav />
            <div className="container">
                <h1>Project 1</h1>
            </div>
            <Contact />
            <Footer />
        </motion.div>
    )
}

export default Project1;