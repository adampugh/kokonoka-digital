import './Loading.scss';
import { motion } from 'framer-motion';

import Leaf from '../assets/img/palm-leaf.png';

const blackVariant = {
    hidden: {
        y: '-100vh'
    },
    visible: {
        y: ['-100vh', '0vh', '100vh'],
        transition: {
            type: 'tween',
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

const Loading = () => {
    return (
        <div id="loading">
            <motion.div className="loading__black" variants={blackVariant} initial="hidden" animate="visible"></motion.div>
            <motion.div className="loading__text" >
                <h1 className="loading__title">KOKONOKA</h1>
            </motion.div>
            <div className="loading__leaf">
                <motion.img src={Leaf} alt="palm leaf" initial={{ scale: 1.6 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: 'easeInOut'}}/>
            </div>
        </div>
    )
}

export default Loading;