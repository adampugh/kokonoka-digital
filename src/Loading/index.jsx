import './Loading.scss';
import { motion } from 'framer-motion';

import Leaf from '../assets/img/palm-leaf.png';
import GreyLeaf from '../assets/img/palm-leaf-grey.png';

const blackVariant = {
    hidden: {
        y: '-100vh'
    },
    visible: {
        y: ['-100vh', '0vh', '-100vh'],
        transition: {
            type: 'tween',
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

const letterVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1, 
            when: 'beforeChildren',
            staggerChildren: 0.4,
        }
    },
    
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
            duration: 1
        }
    },
};

// const loadingTextVariant = {
//     hidden: {
//         scale: 1,
//     },
//     visible: {
//         scale: 0.2,
//         transition: {
//             duration: 1,
//             delay: 6
//         }
//     },
    
// }

const Loading = () => {
    return (
        <div id="loading">
            <motion.div className="loading__black" variants={blackVariant} initial="hidden" animate="visible"></motion.div>
            <motion.div className="loading__text" >
                {/* <motion.h1 className="loading__title" 
                    animate={{ color: '#212121'}} 
                    transition={{ delay: 1 }}>
                        K
                    <motion.span variants={letterVariant} initial="hidden" animate="visible">
                        <motion.span variants={childVariants}>O</motion.span>
                        <motion.span variants={childVariants}>K</motion.span>
                        <motion.span variants={childVariants}>O</motion.span>
                        <motion.span variants={childVariants}>N</motion.span>
                        <motion.span variants={childVariants}>O</motion.span>
                        <motion.span variants={childVariants}>K</motion.span>
                        <motion.span variants={childVariants}>A</motion.span>
                    </motion.span>
                </motion.h1> */}
                <h1 className="loading__title">KOKONOKA</h1>
            </motion.div>
            <div className="loading__leaf">
                <motion.img src={Leaf} alt="palm leaf" initial={{ scale: 1.6 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: 'easeInOut'}}/>
            </div>
            {/* <div className="loading__leaf--grey">
                <motion.img src={GreyLeaf} alt="palm leaf" initial={{ scale: 1.6 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: 'easeInOut'}}/>
            </div> */}
        </div>
    )
}

export default Loading;