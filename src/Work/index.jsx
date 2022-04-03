import './Work.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Work = () => (
    <div id='work'>
        <h2 className='title-spaced'>
            The Latest <FontAwesomeIcon icon={faNewspaper} />
        </h2>
        <div className='work__grid'>
            <Link to='/45N'>
                <div id='work1' className='work__grid__box work__grid__box--white'>
                    <div className='work__grid__box__overlay'>
                        <span className='work__grid__box__button'>Work</span>
                        <h3>Introducing the smoothest blend in Scotland: Taste the secrets of the Scottish Isles</h3>
                    </div>
                </div>
            </Link>
            <Link to='/homeKitchen'>
                <div id='work2' className='work__grid__box work__grid__box--black'>
                    <div className='work__grid__box__overlay'>
                        <span className='work__grid__box__button'>Work</span>
                        <h3>Clean minimalist design for meal-prep subscription service: HomeKitchen</h3>
                    </div>
                </div>
            </Link>
            <Link to='/kamura'>
                <div id='work3' className='work__grid__box work__grid__box--black'>
                    <div className='work__grid__box__overlay'>
                        <span className='work__grid__box__button'>Work</span>
                        <h3>Introducing the beauty of deep cleansing ingredients from Osaka.</h3>
                    </div>
                </div>
            </Link>
            <Link to='/allied-energy'>
                <div id='work4' className='work__grid__box work__grid__box--white'>
                    <div className='work__grid__box__overlay'>
                        <span className='work__grid__box__button'>Work</span>
                        <h3>Energy & Growth - Working with Allied Energy to create sleek and polished branding</h3>
                    </div>
                </div>
            </Link>
        </div>
        <div className='work__button__wrapper'>
            <Link to='/work'>
                <button className='fade-button' aria-label='view work'>
                    View all work
                </button>
            </Link>
        </div>
    </div>
);

export default Work;
