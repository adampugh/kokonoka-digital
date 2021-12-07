import './Careers.scss';
import {useInView} from "react-intersection-observer";
import { motion, useAnimation  } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import Marker from '../assets/icons/marker.png';

const Careers = () => {
    const {inView, entry, ref} = useInView();
    const animationControl = useAnimation();

    if (inView) {
        animationControl.start({
            opacity: 1,
            y: 0,
            transition: {
                type: 'intertia',
                when: 'beforeChildren',
                staggerChildren: 0.4,
                delay: 0.5,
                duration: 1
            },
        });
    }

    return (
        <div id="careers" className="container" ref={ref}>
            <motion.div initial={{opacity: 0,y: 200}} animate={animationControl}>
            <h1 className="title-spaced">Join the team <FontAwesomeIcon icon={faHandsHelping} /></h1>
            <div id="careers__grid">
                <div className="careers__grid__box">
                    <div className="careers__grid__box__office">
                        <h3>London</h3>
                        <span><img src={Marker} alt="marker" /></span>
                    </div>
                    <p>Frontend Architect</p>
                    <p>Senior Backend Engineer</p>
                </div>
                <div className="careers__grid__box">
                    <div className="careers__grid__box__office">
                        <h3>Tokyo</h3>
                        <span><img src={Marker} alt="marker" /></span>
                    </div>
                    <p>No current vacancies</p>
                </div>
                <div className="careers__grid__box">
                    <div className="careers__grid__box__office">
                        <h3>Valencia</h3>
                        <span><img src={Marker} alt="marker" /></span>
                    </div>
                    <p>No current vacancies</p>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default Careers;