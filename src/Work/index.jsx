import { useRef, useEffect } from 'react';
import './Work.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

// const containerVariant = {
//     hidden: {
//         opacity: 0,
//         y: 200
//     },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             type: 'tween',
//             delay: 2.2,
//             duration: 1
//         }
//     }
// }

const Work = () => {
    return (
        <motion.div id="work"   initial="hidden" animate="visible">
            <h2 className="title-spaced">The Latest <FontAwesomeIcon icon={faNewspaper} /></h2>
            <div className="work__grid">
                <div id="work1" className="work__grid__box work__grid__box--white">
                    <div className="work__grid__box__overlay">
                        <span className="work__grid__box__button">Work</span>
                        <h3>Introducing the Truth & Beauty Index: Unlock the secrets of digital transformation</h3>
                    </div>
                </div>
                <div id="work2" className="work__grid__box work__grid__box--black">
                    <div className="work__grid__box__overlay">
                        <span className="work__grid__box__button">Work</span>
                        <h3>Finally a credit card available for those with less than $22MM</h3>
                    </div>
                </div>
                <div id="work3" className="work__grid__box work__grid__box--black">
                    <div className="work__grid__box__overlay">
                        <span className="work__grid__box__button">Work</span>
                        <h3>Introducing the beauty of the new thing that you need.</h3>
                    </div>
                </div>
                <div id="work4" className="work__grid__box work__grid__box--white">
                    <div className="work__grid__box__overlay">
                        <span className="work__grid__box__button">Work</span>
                        <h3>Everything & Anything: How nothing is possible when something is.</h3>
                    </div>
                </div>
            </div>
            <div className="work__button__wrapper">
                <button className="fade-button">View all work</button>
            </div>
        </motion.div>
    )
}

export default Work;