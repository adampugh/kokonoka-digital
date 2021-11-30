import './Brands.scss';
import HP from '../assets/brands/hp.png';
import Chanel from '../assets/brands/chanel.png';
import PF from '../assets/brands/pf.png';
import Plaid from '../assets/brands/plaid.png';

const Brands = () => {
    return (
        <div id="brands">
            <div className="container">
                <div className="brands__grid">
                    <div className="brand__logo">
                        <img src={HP} alt="brand" />
                    </div>
                    <div className="brand__logo">
                        <img src={Chanel} alt="brand" />
                    </div>
                    <div className="brand__logo">
                        <img src={PF} alt="brand" />
                    </div>
                    <div className="brand__logo">
                        <img src={Plaid} alt="brand" />
                    </div>
                </div>
                <hr />
                <p>"Kokonoka are fantastic and I would use them again and again. Excellent work and fantastic speed."</p>
                <div className="brands__quote">David Moore, CEO Princo</div>
            </div>
        </div>
    )
}

export default Brands;