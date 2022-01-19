import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

import scrollToElement from '../utils/utils';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuItemClick = (link) => {
        const isHomePage = location.pathname === '/';
        const delayDuration = isHomePage ? 1200 : 4000;
        if (!isHomePage) navigate(`/#${link}`);
        setTimeout(() => scrollToElement(link), delayDuration);
    };

    return (
        <footer>
            <div className='container'>
                <div className='footer__socials'>
                    <FontAwesomeIcon icon={faInstagram} className='fade-grey-hover' />
                    <FontAwesomeIcon icon={faTwitter} className='fade-grey-hover' />
                    <FontAwesomeIcon icon={faLinkedin} className='fade-grey-hover' />
                </div>
                <div className='footer__box__wrapper'>
                    <div className='footer__box footer__box1'>
                        <p>3 Oxford Road, Waterloo</p>
                        <p>L22 5NS</p>
                        <p>+44 0798135120</p>
                        <p>
                            <b>info@kokonoka.io</b>
                        </p>
                    </div>
                    <div className='footer__box footer__box2'>
                        <a href='#hero' className='fade-grey-hover' onClick={() => handleMenuItemClick('hero')}>
                            Home
                        </a>
                        <a href='#work' className='fade-grey-hover' onClick={() => handleMenuItemClick('work')}>
                            Work
                        </a>
                    </div>
                    <div className='footer__box footer__box2'>
                        <a href='#team' className='fade-grey-hover' onClick={() => handleMenuItemClick('team')}>
                            Team
                        </a>
                        <a href='#careers' className='fade-grey-hover' onClick={() => handleMenuItemClick('careers')}>
                            Careers
                        </a>
                    </div>
                    <div className='footer__box footer__box3'>
                        <a href='#contact' className='fade-grey-hover'>
                            Contact
                        </a>
                        <a href='#contact' className='fade-grey-hover'>
                            Location
                        </a>
                    </div>
                </div>
                <p className='footer__copyright'>© KOKONOKA 2021</p>
            </div>
        </footer>
    );
};

export default Footer;
