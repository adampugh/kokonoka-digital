import './Brands.scss';
import { motion } from 'framer-motion';
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
    return (
        <div id="brands">
            <motion.div className="container" variants={containerVariants} initial="hidden" animate="visible">
                <div className="brands__grid">
                    <motion.div className="brand__logo" variants={childVariants}>
                        <img src={HP} alt="brand" />
                    </motion.div>
                    <motion.div className="brand__logo" variants={childVariants}>
                        <img src={Chanel} alt="brand" />
                    </motion.div>
                    <motion.div className="brand__logo" variants={childVariants}>
                        <img src={PF} alt="brand" />
                    </motion.div>
                    <motion.div className="brand__logo" variants={childVariants}>
                        <img src={Plaid} alt="brand" />
                    </motion.div>
                </div>
                <motion.div variants={childVariants}>
                <hr />

                <p>"Kokonoka are fantastic and I would use them again and again. Excellent work and fantastic speed."</p>
                <div className="brands__quote">David Moore, CEO Princo</div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Brands;