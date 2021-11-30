import './Careers.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import Marker from '../assets/icons/marker.png';

const Careers = () => {
    return (
        <div id="careers" className="container">
            <h1 className="title-spaced">Join the team <FontAwesomeIcon icon={faHandsHelping} /></h1>
            <div id="careers__grid">
                <div className="careers__grid__box">
                    <div className="careers__grid__box__office">
                        <span>London</span>
                        <span><img src={Marker} alt="marker" /></span>
                    </div>
                    <p>Frontend Architect</p>
                    <p>Senior Backend Engineer</p>
                </div>
                <div className="careers__grid__box">
                    <div className="careers__grid__box__office">
                        <span>Tokyo</span>
                        <span><img src={Marker} alt="marker" /></span>
                    </div>
                    <p>No current vacancies</p>
                </div>
                <div className="careers__grid__box">
                    <div className="careers__grid__box__office">
                        <span>Valencia</span>
                        <span><img src={Marker} alt="marker" /></span>
                    </div>
                    <p>No current vacancies</p>
                </div>
            </div>
        </div>
    )
}

export default Careers;