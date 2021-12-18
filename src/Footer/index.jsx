import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__socials">
                    <FontAwesomeIcon icon={faInstagram} className="fade-grey-hover"/>
                    <FontAwesomeIcon icon={faTwitter} className="fade-grey-hover"/>
                    <FontAwesomeIcon icon={faLinkedin} className="fade-grey-hover"/>
                </div>
                <div className="footer__box__wrapper">
                    <div className="footer__box footer__box1">
                        <p>9 King Street, Waterloo</p>
                        <p>L22 5NS</p>
                        <p>+44 0798135120</p>
                        <p><b>info@kokonoka.io</b></p>
                    </div>
                    <div className="footer__box footer__box2">
                        <a href="#hero" className="fade-grey-hover">Home</a>
                        <a href="#work" className="fade-grey-hover">Work</a>
                    </div>
                    <div className="footer__box footer__box2">
                        <a href="#team" className="fade-grey-hover">Team</a>
                        <a href="#careers" className="fade-grey-hover">Careers</a>
                    </div>
                    <div className="footer__box footer__box3">
                        <a href="#contact" className="fade-grey-hover">Contact</a>
                        <a href="#contact" className="fade-grey-hover">Location</a>
                    </div>
                </div>
                <p className="footer__copyright">© KOKONOKA 2021</p>
                <ul>
                    <li>update all links</li>
                    <li>add real pictures</li>
                    <li>add routes</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;