import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

import Nav from '../Nav';
import Work from '../Work';
import Loading from '../Loading';
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

const childVariants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 1.5
        }
    },
};

const WorkPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return loading ? (<Loading />) : (
        <motion.div variants={containerVariants} exit="exit">
            <Nav />
            <motion.div className="container" variants={childVariants} initial="hidden" animate="visible">
                <Work />
            </motion.div>
            <Contact />
            <Footer />
        </motion.div>
    )
}

export default WorkPage;