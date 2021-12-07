import './Brands.scss';
import { motion, useAnimation  } from 'framer-motion';
import {useInView} from "react-intersection-observer";

import HP from '../assets/brands/hp.png';
import Chanel from '../assets/brands/chanel.png';
import PF from '../assets/brands/pf.png';
import Plaid from '../assets/brands/plaid.png';

const containerVariants = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'intertia',
            when: 'beforeChildren',
            staggerChildren: 0.4,
        },
    },
};



const childVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    },
};

const Brands = () => {
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
        <div id="brands" ref={ref}>
        
        <motion.div className="container" 
            initial={{opacity: 0,y: 200}} 
            animate={animationControl}>
                <div className="brands__grid">
                    <motion.div className="brand__logo" variants={childVariants} initial="hidden" animate="visible">
                        <img src={HP} alt="brand" />
                    </motion.div>
                    <motion.div className="brand__logo" variants={childVariants} initial="hidden" animate="visible">
                        <img src={Chanel} alt="brand" />
                    </motion.div>
                    <motion.div className="brand__logo" variants={childVariants} initial="hidden" animate="visible">
                        <img src={PF} alt="brand" />
                    </motion.div>
                    <motion.div className="brand__logo" variants={childVariants} initial="hidden" animate="visible">
                        <img src={Plaid} alt="brand" />
                    </motion.div>
                </div>
                <motion.div variants={childVariants}  initial="hidden" animate="visible">
                <hr />

                <p>"Kokonoka are fantastic and I would use them again and again. Excellent work and fantastic turnaround."</p>
                <div className="brands__quote">David Moore, CEO Princo</div>
                </motion.div>
            </motion.div>
            
        </div>
    )
}

export default Brands;