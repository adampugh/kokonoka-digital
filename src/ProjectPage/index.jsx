import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectPage.scss';

import Nav from '../Nav';
import Contact from '../Contact';
import Footer from '../Footer';
import Loading from '../Loading';

import HomeKitchenDesktop from '../assets/projects/HomeKitchenDesktop.png';
import HomeKitchen1 from '../assets/projects/HomeKitchen1.png';
import HomeKitchen2 from '../assets/projects/HomeKitchen2.png';
import HomeKitchen3 from '../assets/projects/HomeKitchen3.png';

// import MedicanDesktop from '../assets/projects/Medican-Desktop.png'
// import MedicanDesktop3 from '../assets/projects/Medican-Desktop3.png'
// import Medican1 from '../assets/projects/Medican.jpg'
// import Medican2 from '../assets/projects/Medican2.jpg'
// import Medican3 from '../assets/projects/Medican3.jpg'

import AEDeskop from '../assets/projects/AEDesktop.png';
import AE1 from '../assets/projects/AE1.jpg';
import AE2 from '../assets/projects/AE2.jpg';
import AE3 from '../assets/projects/AE3.jpg';

import FortyFiveNDesktop from '../assets/projects/45°N.png';
import FortFiveN1 from '../assets/projects/FortyFiveN1.jpg';
import FortFiveN2 from '../assets/projects/FortyFiveN2.jpg';
import FortFiveN4 from '../assets/projects/FortyFiveN4.png';

import KamuraDesktop from '../assets/projects/KamuraDesktop.png';
import Kamura1 from '../assets/projects/Kamura1.png';
import Kamura3 from '../assets/projects/Kamura3.png';
import Kamura4 from '../assets/projects/y.png';

const containerVariants = {
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut',
            duration: 0.5,
        },
    },
};

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
            delay: 1.5,
        },
    },
};

const projects = {
    homeKitchen: {
        title: 'HomeKitchen',
        text: 'Working with energy brand. Utilizing our excellence, new moves and continuing to move forward with new ideas. Working with colours to create a brand new exciting experience for an  forward with new ideas.',
        images: [HomeKitchenDesktop, HomeKitchen3, HomeKitchen2, HomeKitchen1],
    },
    'allied-energy': {
        title: 'Allied Energy',
        text: 'Working with energy brand. Utilizing our excellence, new moves and continuing to move forward with new ideas. Working with colours to create a brand new exciting experience for an  forward with new ideas.',
        images: [AEDeskop, AE3, AE1, AE2],
    },
    '45N': {
        title: '45°N',
        text: 'Working with energy brand. Utilizing our excellence, new moves and continuing to move forward with new ideas. Working with colours to create a brand new exciting experience for an  forward with new ideas.',
        images: [FortyFiveNDesktop, FortFiveN1, FortFiveN2, FortFiveN4],
    },
    kamura: {
        title: 'Kamura',
        text: 'Working with cosmetics brand Kamura, we created a sleek and stylish design to help with conversions in Western and Japanese markets.',
        images: [KamuraDesktop, Kamura1, Kamura3, Kamura4],
    },
};

const Project1 = () => {
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        const projectName = location.pathname.replace(/\//g, '');
        setProject(projects[projectName]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return loading ? (
        <Loading />
    ) : (
        <motion.div className='site' variants={containerVariants} exit='exit'>
            <Nav />
            <motion.div className='container' variants={childVariants} initial='hidden' animate='visible'>
                <div id='project'>
                    <div className='project__text'>
                        <h1>{project.text}</h1>
                    </div>
                    <div className='project__grid'>
                        {project.images.map((img) => (
                            <div className='project__grid__img' key={img.toString()}>
                                <img src={img} alt='' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='work__button__wrapper'>
                    <Link to='/work'>
                        <button className='fade-button'>View all work</button>
                    </Link>
                </div>
            </motion.div>
            <Contact />
            <Footer />
        </motion.div>
    );
};

export default Project1;
