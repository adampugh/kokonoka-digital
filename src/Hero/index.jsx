import { useRef, useEffect, useState } from 'react';
import './Hero.scss';
import Leaf from '../assets/img/leaf.png';
import { motion } from 'framer-motion';
import Work from '../Work'


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
            staggerChildren: 0.6,
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
            duration: 1
        }
    },
};

const Hero = () => {

    return (
        <motion.div id="hero" className="container" variants={containerVariants} initial="hidden" animate="visible">
            {/* <img src={Leaf} alt="leaf" /> */}
            {/* <h1>Creative Digital Agency</h1> */}
            {/* <img src={Plants} alt="plants" /> */}
            <motion.p id="hero__text" variants={childVariants}>
            We pride ourselves on rapid <span>design</span>, <span>development</span> and 
            </motion.p>
            <motion.p id="hero__text" variants={childVariants}>
            <span>deployment</span> to take full advantage of momentum in the market 
            </motion.p>
            <motion.p id="hero__text" variants={childVariants}>
            and to build a solid foundation for <span>future growth</span>. 
            </motion.p>
            
            <motion.div variants={childVariants}>

            <Work />
            </motion.div>
        </motion.div>
    )
}

export default Hero;





// const Order = ({ pizza }) => {
//     return (
//         <motion.div className="container order" variants={containerVariants} initial="hidden" animate="visible">
//             <h2>Thank you for your order :)</h2>
//             <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
//             <motion.div variants={childVariants}>
//                 {pizza.toppings.map((topping) => (
//                     <div key={topping}>{topping}</div>
//                 ))}
//             </motion.div>
//         </motion.div>
//     );
// };

// export default Order;
