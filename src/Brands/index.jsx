import './Brands.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import LV from '../assets/brands/lv.webp';
import Emirates from '../assets/brands/emirates.webp';
import EL from '../assets/brands/el.webp';
import Mac from '../assets/brands/mac.webp';

const childVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const Brands = () => {
    const { inView, ref } = useInView();
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
                duration: 1,
            },
        });
    }

    return (
        <div id='brands' ref={ref}>
            <motion.div className='container' initial={{ opacity: 0, y: 200 }} animate={animationControl}>
                <div className='brands__grid'>
                    <motion.div className='brand__logo' variants={childVariants} initial='hidden' animate='visible'>
                        <img src={Emirates} alt='brand' />
                    </motion.div>
                    <motion.div className='brand__logo' variants={childVariants} initial='hidden' animate='visible'>
                        <img src={LV} alt='brand' />
                    </motion.div>
                    <motion.div className='brand__logo' variants={childVariants} initial='hidden' animate='visible'>
                        <img src={EL} alt='brand' />
                    </motion.div>
                    <motion.div className='brand__logo' variants={childVariants} initial='hidden' animate='visible'>
                        <img src={Mac} alt='brand' />
                    </motion.div>
                </div>
                <motion.div variants={childVariants} initial='hidden' animate='visible'>
                    <hr />
                    <p>
                        "Kokonoka are fantastic and I would use them again and again. Excellent work and fantastic
                        turnaround."
                    </p>
                    <div className='brands__quote'>David Moore, CEO Princo</div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Brands;
