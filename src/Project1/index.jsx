import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';
import './Project1.scss'

import Nav from '../Nav';
import Contact from '../Contact';
import Footer from '../Footer';
import Loading from '../Loading';

import Img from '../assets/img/345.webp'
import Img2 from '../assets/img/104.webp'
import Img3 from '../assets/img/84.webp'
import Img4 from '../assets/img/94.webp'

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

const projects = {
    1: {
        text: 'Working with colours to create a brand new exciting experience for an excellent energy brand. Utilizing our excellence, new moves and continuing to move forward with new ideas.',
        images: [Img, Img2, Img4, Img3]
    }
}


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
        const projectNumber = location.pathname.match(/\d/g).join('')
        setProject(projects[projectNumber]);
    }, [])
    
    return loading ? (<Loading />) : (
        <motion.div variants={containerVariants} exit="exit">
            <Nav />
            <motion.div className="container" variants={childVariants} initial="hidden" animate="visible">
                <div id="project">
                    <div className="project__text">
                        <h1>{project.text}</h1>
                    </div>
                    <div className="project__grid">
                        {project.images.map((img, i) => (
                            <div className="project__grid__img">
                                <img src={img} alt="" key={i} />
                            </div>
                        ))}
                    </div>
                
                </div>
            </motion.div>
            <Contact />
            <Footer />
        </motion.div>
    )
}

export default Project1;