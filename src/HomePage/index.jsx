import { useState, useEffect } from 'react';
import './HomePage.scss';
import { motion } from 'framer-motion'

import Loading from '../Loading';
import Nav from '../Nav';
import Hero from '../Hero';
import Brands from '../Brands';
import Team from '../Team';
import Careers from '../Careers';
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

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <motion.div className="App" variants={containerVariants} exit="exit">
            <header className="App-header"></header>
            {loading ? (
                <Loading />
            ) : (
                <div className="site">
                    <Nav />
                    <Hero />
                    <Brands />
                    <Team />
                    <Careers />
                    <Contact />
                    <Footer />
                </div>
            )}
        </motion.div>
    );
};

export default HomePage;
