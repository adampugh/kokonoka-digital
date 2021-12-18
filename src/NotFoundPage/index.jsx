import { useState, useEffect } from 'react';
import './NotFoundPage.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Nav from '../Nav';

const containerVariants = {
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut',
            duration: .5
        }
    }
}

const NotFoundPage  = () => {
    return (
        <motion.div variants={containerVariants} exit="exit">
            <Nav />
            <div id="notFound" className="container">
                <h1>404</h1>
                <p>Sorry page not found.</p>
                <button className="fade-button"><Link to="/">Home</Link></button>
            </div>
        </motion.div>
    );
}

export default NotFoundPage;