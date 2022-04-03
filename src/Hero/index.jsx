import './Hero.scss';
import { motion } from 'framer-motion';
import Work from '../Work';
import useWindowDimensions from '../hooks/useWindowDimensions';

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
            delay: 1.6,
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
            duration: 1,
        },
    },
};

const HeroMobileText = () => (
    <motion.p id='hero__text' variants={childVariants}>
        We pride ourselves on rapid <span>design</span>, <span>development</span> and <span>deployment</span> to take
        full advantage of momentum in the market and to build a solid foundation for <span>future growth</span>.
    </motion.p>
);

const HeroDesktopText = () => (
    <>
        <motion.p id='hero__text' variants={childVariants}>
            We pride ourselves on rapid <span>design</span>, <span>development</span> and
        </motion.p>
        <motion.p id='hero__text' variants={childVariants}>
            <span>deployment</span> to take full advantage of momentum in the
        </motion.p>
        <motion.p id='hero__text' variants={childVariants}>
            market and to build a solid foundation for <span>future growth</span>.
        </motion.p>
    </>
);

const Hero = () => {
    const { width } = useWindowDimensions();

    return (
        <motion.div id='hero' className='container' variants={containerVariants} initial='hidden' animate='visible'>
            {width < 1320 ? <HeroMobileText /> : <HeroDesktopText />}
            <motion.div variants={childVariants}>
                <Work />
            </motion.div>
        </motion.div>
    );
};

export default Hero;
