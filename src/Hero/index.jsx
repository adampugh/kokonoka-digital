import './Hero.scss';
import Leaf from '../assets/img/leaf.png'

const Hero = () => {
    return (
        <div id="hero" className="container">
            {/* <img src={Leaf} alt="leaf" /> */}
            {/* <h1>Creative Digital Agency</h1> */}
            {/* <img src={Plants} alt="plants" /> */}
            <p>
            We pride ourselves on rapid <span>design</span>, <span>development</span> and <span>deployment</span> to take full 
            advantage of momentum in the market and to build a solid foundation for <span>future growth</span>. 
            </p>
        </div>
    )
}

export default Hero;