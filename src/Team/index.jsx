import './Team.scss';
import {useInView} from "react-intersection-observer";
import { motion, useAnimation  } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import Profile1 from '../assets/img/profile1.webp' 
import Profile2 from '../assets/img/profile2.webp' 
import Profile3 from '../assets/img/profile3.webp' 

const Team = () => {
    const {inView, ref} = useInView();
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
        <div id="team" className="container" ref={ref}>
            <motion.div initial={{opacity: 0,y: 200}} animate={animationControl}>
                <h1 className="title-spaced">The team <FontAwesomeIcon icon={faUsers} /></h1>
                <div className="team__grid">
                    <div className="team__grid__profile">
                        <img src={Profile1} alt="team profile" />
                        <h3>David Li</h3>
                        <p>Marketing & Strategy</p>
                    </div>
                    <div className="team__grid__profile">
                        <img src={Profile2} alt="team profile" />
                        <h3>Adam Pugh</h3>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="team__grid__profile">
                        <img src={Profile3} alt="team profile" />
                        <h3>Kate Waters</h3>
                        <p>UX Designer</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Team;