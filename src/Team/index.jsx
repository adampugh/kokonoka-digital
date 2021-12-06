import './Team.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import Profile1 from '../assets/img/profile1.webp' 
import Profile2 from '../assets/img/profile2.webp' 
import Profile3 from '../assets/img/profile3.webp' 

const Team = () => {
    return (
        <div id="team" className="container">
            <h1 className="title-spaced">The team <FontAwesomeIcon icon={faUsers} /></h1>
            <div className="team__grid">
                <div className="team__grid__profile">
                    <img src={Profile1} alt="team profile" />
                    <h3>David Li</h3>
                    <p>Marketing & Strategy</p>
                </div>
                <div className="team__grid__profile">
                    <img src={Profile2} alt="team profile" />
                    <h3>Mark Tobin</h3>
                    <p>Full-Stack Developer</p>
                </div>
                <div className="team__grid__profile">
                    <img src={Profile3} alt="team profile" />
                    <h3>Kate Waters</h3>
                    <p>UX Designer</p>
                </div>
            </div>
        </div>
    )
}

export default Team;